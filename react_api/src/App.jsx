import React from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <main className="main-content">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}