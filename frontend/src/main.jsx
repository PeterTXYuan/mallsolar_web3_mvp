// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { Provider } from './components/ui/provider';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from './components/ui/provider';
import App from './App';
import Market from './pages/Market';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/market" replace />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);