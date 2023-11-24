import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import School from './components/School';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Unpam from './components/school/Unpam';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <School/>
          <Routes>
              <Route path='/unpam' element={<Unpam/>} />
          </Routes>
        <Contact/>
      
        {/* Main Content */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
