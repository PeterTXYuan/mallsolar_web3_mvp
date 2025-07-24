import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from './components/ui/provider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);