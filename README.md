# HQ - UI test

Welcome to your frontend test for HQ, clone the repository and start by
following the instructions below.

Here at HQ we do a lot of e-commerce applications every one gets an opportunity to dip their toes in an e-commerce project. This project is a scaffolding of a standard marketplace. This application is designed to test your skills in navigating a next.js application, building react components, making API requests, following existing codebase patterns.

# The goal

Complete this application so that you can render the marketplace navigate to the cart page and ultimately place a successful order. Create the necessary components, functions, and page/s and integrate this frontend with the API.

## Running the application

- Create an `.env` file with the following variables:

```
NEXT_PUBLIC_API_URL="http://localhost:8000"
```

- Run your BE application

- Run your FE application by running:

```bash
  yarn dev
```

- Your application should be on `http://localhost:3000`

## Tasks

- Build a `ProductCard` component that can:

  - a. Display individual products
  - b. "Buy Now" button, ability to add the product to cart and immediately navigate the user to the checkout page `/checkout`.
  - c. "Add to Cart" button, ability to add product to cart and make the PopOver component appear.

- Build cart page with the following:
  - a. The cart page should display the products added to cart.
  - b. The cart page should have the ability to remove items in cart.
  - c. "Checkout" button, there should be a checkout button that navigates the user to checkout.
  - d. "Continue Shopping" button, user should be able to navigate back to the marketplace landing page and continue shopping.

## Bonus points

This is not needed for the test but would gain you extra points if you
manage to fit it within the allocated time.

- Style the whole app or just parts of it, this is the time to show us how creative you can be. Some clients would request just a feature without any design and we have to build them as fast as we can balancing aesthetics, functionality and stability.
- Create unit tests for the ProductCard component using react-testing-library
