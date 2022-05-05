import Navbar from './components/navbar';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import {React} from 'react';
import AOS from 'aos';



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

