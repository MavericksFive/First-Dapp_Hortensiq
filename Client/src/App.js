import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import {React, useState, useEffect} from 'react';
import AOS from 'aos';
import HortensiaNFT from '/Users/arnaudberger/hortensiq/Client/src/Abis/HortensiaNFT.json';
import {ethers} from 'ethers';


AOS.init();

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route exact path="/" element={Home()}>
</Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App
export let min

