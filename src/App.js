import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agents from './pages/Agents';

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
