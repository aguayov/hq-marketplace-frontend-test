// components/Loader.tsx
import React from 'react';
import {
  Product,
  useMarketplaceDispatch,
  useMarketplaceState,
} from 'context/MarketplaceContextProvider';
import { Button } from 'components';
import { useRouter } from 'next/router';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { name, price, vendor_id } = product;
  const router = useRouter();
  const state = useMarketplaceState();
  const dispatch = useMarketplaceDispatch();

  if (!state) {
    return null;
  }

  const handleAddToCart = () => {
    //to do add product to cart
    // display popover with cart menu
    toggleCartPopOver();
  };

  const toggleCartPopOver = () => {
    dispatch({ type: 'TRIGGER_POPOVER', payload: true });
  };

  const handleBuyNow = () => {
    //to do add product to cart logic
    router.push('/checkout');
  };

  return (
    <div className='product-card'>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'>${price}</p>
        <p className='product-vendor'>Vendor: {vendor_id}</p>
        <Button onClick={handleBuyNow}>Buy Now</Button>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
