// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');

const startApp = () => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    startApp(NextApp);
  });
}

startApp();
