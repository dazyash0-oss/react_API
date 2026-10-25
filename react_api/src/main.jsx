import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Redux Provider & Store
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
