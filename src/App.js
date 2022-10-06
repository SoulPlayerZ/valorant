import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chars from './components/Chars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chars />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
