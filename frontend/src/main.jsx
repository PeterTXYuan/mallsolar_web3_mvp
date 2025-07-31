import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './components/ui/provider';
import Home from './pages/Home';
import Market from './pages/Market';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Provider } from './components/ui/provider';
// import App from './App';
// import Market from './pages/Market';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navigate to="/market" replace />} />
//           <Route path="/market" element={<Market />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );