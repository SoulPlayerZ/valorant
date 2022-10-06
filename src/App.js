import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route part="/chars" element={ <Chars />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
