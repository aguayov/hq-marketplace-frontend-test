import React, { useEffect, useState, useCallback } from 'react';
import { ProductCard, Flex } from 'components';
import { Product } from 'context/MarketplaceContextProvider';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {
  useMarketplaceState,
  useMarketplaceDispatch,
} from 'context/MarketplaceContextProvider';
import { Button } from 'components';

const MarketplaceHeader = dynamic(
  () => import('components/MarketplaceHeader'),
  { ssr: false }
);

const Home: React.FC = () => {
  const router = useRouter();
  const state = useMarketplaceState();

  const handleContinueShopping = () => {
    router.push('/');
  };
  /* 
  const toggleCartPopOver = () => {
    dispatch({ type: 'TRIGGER_POPOVER', payload: true });
  };

  const handleBuyNow = () => {
    !quantity && dispatch({ type: 'SET_CART', payload: product });
    router.push('/checkout');
  }; */

  const handleCheckout = () => {
    router.push('/checkout');
  };

  // ============================== RENDER ===============================
  return (
    <Flex column>
      <MarketplaceHeader />
      <p>These are the items currently in your cart</p>
      <Flex gap='16px' margin='32px 16px 0'>
        {state?.cart?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
      <Flex gap='16px' margin='32px 16px 0'>
        <Button onClick={handleCheckout}>Checkout</Button>
        <Button onClick={handleContinueShopping}>Continue Shopping</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
