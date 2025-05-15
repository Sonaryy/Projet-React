import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage.js";
import Gallery from './Pages/gallery.js';
import Team from './Pages/team.js';
import Science from './Pages/science.js'
import NotFound from "./Pages/error"; 

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Science" element={<Science/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
