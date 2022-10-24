import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import Sprays from './pages/Sprays';
import "./css/index.css";
import OneAgente from './pages/OneAgent';
import KAYOPage from './pages/KAYOPage';
import OneMap from './pages/OneMap';
import OneSpray from './pages/OneSpray';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/sprays/:id" element={<OneSpray />} />
        <Route path="/sprays" element={<Sprays />} />
        <Route path="/maps/:id" element={<OneMap />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/agents/:displayName" element={<OneAgente />} />
        <Route path="/agents/KAY/O" element={<KAYOPage/>} />
        <Route path="/" element={<Agents />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
