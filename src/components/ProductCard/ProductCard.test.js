import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import {
  useMarketplaceDispatch,
  useMarketplaceState,
} from 'context/MarketplaceContextProvider';
import { useRouter } from 'next/router';

jest.mock('context/MarketplaceContextProvider');

jest.mock('next/router');

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'Product A',
    price: 10,
    vendor_id: 123,
    quantity: 5,
  };

  beforeEach(() => {
    useMarketplaceDispatch.mockReturnValue(jest.fn());
    useMarketplaceState.mockReturnValue({ cart: [] });
    useRouter.mockReturnValue({ push: jest.fn() });
  });

  it('renders product details correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('quantity: 5')).toBeInTheDocument();
    expect(screen.getByText('Vendor: 123')).toBeInTheDocument();
  });

  it('calls handleAddToCart when "Add to Cart" button is clicked', () => {
    render(<ProductCard product={mockProduct} />);
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);
    const dispatch = useMarketplaceDispatch();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_CART',
      payload: mockProduct,
    });
  });

  it('calls handleBuyNow and pushes to "/checkout" when "Buy Now" button is clicked', () => {
    render(<ProductCard product={mockProduct} />);
    const buyNowButton = screen.getByText('Buy Now');
    fireEvent.click(buyNowButton);
    const dispatch = useMarketplaceDispatch();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_CART',
      payload: mockProduct,
    });
    const push = useRouter().push;
    expect(push).toHaveBeenCalledWith('/checkout');
  });

  it('renders trash icon and calls dispatch when "Remove" button is clicked', () => {
    render(<ProductCard product={mockProduct} />);
    const removeButton = screen.getByRole('button', { name: 'Remove' });
    fireEvent.click(removeButton);
    const dispatch = useMarketplaceDispatch();
    expect(dispatch).toHaveBeenCalledWith({
      type: 'REMOVE_ITEM',
      payload: 1,
    });
  });
});
