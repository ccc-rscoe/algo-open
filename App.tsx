import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rulebook from './pages/Rulebook';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/algo-open">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rulebook" element={<Rulebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;