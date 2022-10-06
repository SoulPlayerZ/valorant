import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';
import "./css/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
