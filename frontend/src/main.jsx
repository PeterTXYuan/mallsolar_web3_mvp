import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './components/ui/provider';
import Home from './pages/Home';
import Market from './pages/Market';
import Login from "./pages/Login";
import About from "./pages/About";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
