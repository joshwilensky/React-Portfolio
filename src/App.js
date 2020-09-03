import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer'

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
