import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./compontents/Header";
import Navbar from "./compontents/Navbar";
import Footer from './compontents/Footer';
import NewIn from './pages/NewIn';
import Suits from './pages/Suits';
import Trousers from './pages/Trousers';
import { useState } from 'react'
import React from 'react'
import './App.css'
import Shopinstagram from './pages/Shopinstagram'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/trousers" element={<Trousers />} />
        <Route path="/shopinstagram" element={<Shopinstagram />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
