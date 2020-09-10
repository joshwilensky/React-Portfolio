import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Router />
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </div >
  );
}

export default App;
