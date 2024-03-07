import React from 'react';
// import ReactDOM from 'react-dom'; // Remove this line
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const startApp = () => {
  createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    startApp(NextApp);
  });
}

startApp();
