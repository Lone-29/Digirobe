import React from 'react';
import signin from './signin';
import signup from './signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<signin/>}/>
      <Route path="/b" element={<signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;