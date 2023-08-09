import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { ProductCard, Flex } from 'components';
import { Product } from 'context/MarketplaceContextProvider';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const MarketplaceHeader = dynamic(
  () => import('components/MarketplaceHeader'),
  { ssr: false }
);

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { vendor_id, location_id } = router.query;

  // ============================== FUNCTIONS ===============================

  const getProducts = useCallback(
    async (location_id: number, vendor_id: number) => {
      try {
        const { data: productsRes } = await axios.get<Product[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${location_id}/vendors/${vendor_id}`
        );
        if (productsRes) {
          setProducts(productsRes);
        }
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  // ============================== USE EFFECTS ===================================
  useEffect(() => {
    if (vendor_id && location_id) {
      getProducts(Number(location_id), Number(vendor_id));
    }
  }, [vendor_id, location_id]);

  // ============================== RENDER ===============================
  return (
    <Flex column>
      <MarketplaceHeader />
      <Flex gap='16px' margin='32px 16px 0'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
