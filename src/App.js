import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import Buddies from './pages/Buddies';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import "./css/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/buddies" element={<Buddies />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
