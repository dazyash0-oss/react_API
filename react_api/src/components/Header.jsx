import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`header ${theme}`}>
      <h1>E-Commerce Store</h1>
      
      {/* Context API Demo: Theme & Auth */}
      <div className="header-actions">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        {user ? (
          <div>
            <span>Welcome, <strong>{user.name}</strong>!</span>
            <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login('JohnDoe')}>Login</button>
        )}

        <div className="cart-badge">
          🛒 Cart: <strong>{totalCartCount}</strong> items
        </div>
      </div>
    </header>
  );
};