import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import Buddies from './pages/Buddies';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import Sprays from './pages/Sprays';
import "./css/index.css";
import OneAgente from './pages/OneAgent';
import KAYOPage from './pages/KAYOPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buddies" element={<Buddies />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/sprays" element={<Sprays />} />
        <Route path="/agents/:displayName" element={<OneAgente />} />
        <Route path="/agents/KAY/O" element={<KAYOPage/>} />
        <Route path="/" element={<Agents />} />

      </Routes> 
    </BrowserRouter>
  );
}

export default App;
