import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import Buddies from './pages/Buddies';
import "./css/index.css";
import Bundles from './pages/Bundles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/buddies" element={<Buddies />} />
        <Route path="/bundles" element={<Bundles />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
