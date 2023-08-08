import React, { createContext, useContext, useReducer } from "react"

interface MarketplaceContextProviderProps {
  children: React.ReactNode
}

export interface Product {
  id: number
  name: string
  price: number
  vendor_id: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface MarketplaceState {
  cart: CartItem[]
}

type Action =
  | { type: "SET_CART"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }

type Dispatch = (action: Action) => void

const MarketplaceStateContext = createContext<MarketplaceState | undefined>(
  undefined
)
const MarketplaceDispatchContext = createContext<Dispatch>(() => null)

export const useMarketplaceState = () => {
  return useContext(MarketplaceStateContext)
}

export const useMarketplaceDispatch = () => {
  return useContext(MarketplaceDispatchContext)
}

// Necessary in order to use sessionStorage at build time
const isSSR = typeof window === "undefined"

const existingCart = !isSSR ? JSON.parse(sessionStorage.getItem("cart")!) : []

const initialState: MarketplaceState = {
  // state
  cart: existingCart,
}

const reducer = (state: MarketplaceState, action: Action): MarketplaceState => {
  switch (action.type) {
    case "SET_CART": {
      const existingCartItem = state?.cart?.find(
        item => item.id === action.payload.id
      )
      let newCart

      if (existingCartItem) {
        newCart = state?.cart?.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        if (Array.isArray(state.cart)) {
          newCart = [...state.cart, { ...action.payload, quantity: 1 }]
        } else {
          newCart = [{ ...action.payload, quantity: 1 }]
        }
      }

      !isSSR && sessionStorage.setItem("cart", JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart,
      }
    }
    case "REMOVE_ITEM": {
      const newCart = state.cart.filter(item => item.id !== action.payload)
      !isSSR && sessionStorage.setItem("cart", JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart,
      }
    }
  }
}

const MarketplaceContextProvider: React.FC<MarketplaceContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MarketplaceStateContext.Provider value={state}>
      <MarketplaceDispatchContext.Provider value={dispatch}>
        {children}
      </MarketplaceDispatchContext.Provider>
    </MarketplaceStateContext.Provider>
  )
}

export default MarketplaceContextProvider
