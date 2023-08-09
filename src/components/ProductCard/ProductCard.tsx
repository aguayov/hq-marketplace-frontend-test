// components/Loader.tsx
import React from 'react';
import { Product } from 'context/MarketplaceContextProvider';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { name, price, vendor_id } = product;
  return (
    <div className='product-card'>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'>${price}</p>
        <p className='product-vendor'>Vendor: {vendor_id}</p>
      </div>
    </div>
  );
};

export default ProductCard;
