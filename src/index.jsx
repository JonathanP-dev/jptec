import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/Cart';
import { FavProvider } from './contexts/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CartProvider>
        <FavProvider>
          <App />
        </FavProvider>
      </CartProvider>
  </React.StrictMode>
);
