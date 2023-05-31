import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/Cart';
import { FavProvider } from './contexts/Favorites';
import { FilterProvider } from './contexts/Filters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider>
    <CartProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </CartProvider>
  </FilterProvider>
);
