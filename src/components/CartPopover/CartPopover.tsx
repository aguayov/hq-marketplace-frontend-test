import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  useMarketplaceState,
  useMarketplaceDispatch,
} from 'context/MarketplaceContextProvider';
import { Flex, Text, Button } from 'components';
import { FaTrash } from 'react-icons/fa';

export interface CarPopOverProps {
  open: boolean;
}

const CartPopover: React.FC<CarPopOverProps> = ({ open }) => {
  // ============================== HOOKS ===================================
  const dispatch = useMarketplaceDispatch();
  const state = useMarketplaceState();
  const router = useRouter();

  // ============================== REFS ===============================

  const popoverRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // ============================== STATES ===================================
  const [isOpen, setIsOpen] = React.useState(false);

  // ============================== FUNCTIONS ===============================

  const closePopover = useCallback(() => {
    setIsOpen(false);
    dispatch({ type: 'TRIGGER_POPOVER', payload: false });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const checkout = () => {
    router.push('/checkout');
  };

  const goToCart = () => {
    router.push('/cart');
  };

  // ============================== USE EFFECTS ===================================

  useEffect(() => {
    if (state?.cart) {
      setIsOpen(state?.cart?.length > 0);
      timeoutRef.current = setTimeout(closePopover, 5000);
    }
  }, [closePopover, state?.cart]);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).tagName !== 'BUTTON' &&
        (event.target as HTMLElement).tagName !== 'SVG'
      ) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopover]);

  // ============================== RENDER ===============================

  return (
    <Flex
      ref={popoverRef}
      column
      position='absolute'
      top='0'
      right='0'
      width='300px'
      background='white'
      border='1px solid black'
      padding='1em'
      display={isOpen ? 'block' : 'none'}
      boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.2)'
      borderRadius='8px'
    >
      <Text kind='f2'>Your Cart</Text>
      {state?.cart?.map((item, index) => (
        <Flex
          key={`${item.id} - ${index}`}
          justify='space-between'
          margin='initial initial 1em'
        >
          <p>{`${item.name} x${item.quantity}`}</p>
          <FaTrash
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
          />
        </Flex>
      ))}

      <Flex gap='16px'>
        <Button onClick={checkout}>Checkout</Button>
        <Button onClick={goToCart}>Cart</Button>
      </Flex>
    </Flex>
  );
};

export default CartPopover;
