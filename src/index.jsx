import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/Cart';
import { FavProvider } from './contexts/Favorites';
import { FilterProvider } from './contexts/Filters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </CartProvider>
    </FilterProvider>
  </StrictMode>
);
