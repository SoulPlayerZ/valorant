import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import Buddies from './pages/Buddies';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import "./css/index.css";
import Bundles from './pages/Bundles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/buddies" element={<Buddies />} />
<<<<<<< HEAD
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
=======
        <Route path="/bundles" element={<Bundles />} />
>>>>>>> 164d4d61496a0e48595bc5061247c877380dcddc
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
