// components/Loader.tsx
import React from 'react';
import {
  CartItem,
  useMarketplaceDispatch,
  useMarketplaceState,
} from 'context/MarketplaceContextProvider';
import { Button } from 'components';
import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa';

interface ProductProps {
  product: CartItem;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { name, price, vendor_id, quantity, id } = product;
  const router = useRouter();
  const state = useMarketplaceState();
  const dispatch = useMarketplaceDispatch();

  if (!state) {
    return null;
  }

  const handleAddToCart = (product: CartItem) => {
    dispatch({ type: 'SET_CART', payload: product });
    toggleCartPopOver();
  };

  const toggleCartPopOver = () => {
    dispatch({ type: 'TRIGGER_POPOVER', payload: true });
  };

  const handleBuyNow = () => {
    !quantity && dispatch({ type: 'SET_CART', payload: product });
    router.push('/checkout');
  };

  const shouldShowItem = !quantity;

  return (
    <div className='product-card'>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'>${price}</p>
        {quantity && <p className='product-quantity'>quantity: {quantity}</p>}
        <p className='product-vendor'>Vendor: {vendor_id}</p>
        {shouldShowItem && <Button onClick={handleBuyNow}>Buy Now</Button>}
        {shouldShowItem && (
          <Button
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </Button>
        )}
        {!shouldShowItem && (
          <FaTrash
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
