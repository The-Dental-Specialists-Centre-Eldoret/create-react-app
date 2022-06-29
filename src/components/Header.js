import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Services from './Services';
import Gallery from './Gallery';
import Specialists from './Specialists';
import Blog from './Blog';
import Home from './Home';
// import Header from './Header';
// import Footer from './Footer';

export default function Header() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <Link to="/"><img className="dsc-logo" src="assets/images/dsc_logo.png" alt="dsceldoret" width={160} height={68} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/doctors" className="nav-link">Doctors</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-item cta"><a href="https://api.whatsapp.com/send/?phone=254748434345&text=Hello%21+The+Dental+Specialists%27+Centre.&app_absent=0" target="_blank" rel="noopener noreferrer" className="nav-link"><span>Schedule An Appointment</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Specialists />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
  );
}
