import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  // Import Route and Routes for routing
import Header from './components/Header';  // Import Header component
import Home from './components/Home';  // Import Home component
import About from './components/About';  // Import About component
import Skills from './components/Skills';
import Contact from './components/Contact';  // Import Contact component
import Projects from './components/Projects';  // Import Playlist component
import Footer from './components/Footer';  // Import Footer component

const App = () => {
  return (
    <>
      <Header />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/projects" element={<Projects/>} /> 
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />  {/* Display footer on every page */}
    </>
  );
}

export default App;
