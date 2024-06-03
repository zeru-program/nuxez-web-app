import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import {WOW} from 'wowjs'
import '../public/lib/animate.css'
import Home from './pages/landing-page/Home.jsx'
import Service from './pages/landing-page/Service.jsx'
import About from './pages/landing-page/About.jsx'
import ContactUs from './pages/landing-page/ContactUs.jsx'
import E404 from './pages/errors/E404.jsx'

function RouterApp() {
 useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true
    });
    wow.init();
  }, []);

  return (
     <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/our-service" element={<Service />} />
       <Route path="/about-us" element={<About />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="*" element={<E404 />} />
      </Routes>
     </Router>
  )
}

export default RouterApp
