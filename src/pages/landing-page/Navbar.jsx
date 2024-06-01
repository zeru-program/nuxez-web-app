import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand nav-logo text-light fw-bold" href="#">
          <img src="/img/logo-nav.png" style={{ width: '100px' }} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="icon-nav-tg bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/our-service' ? 'active' : ''}`} href="/our-service">Our Service &amp; Project</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} href="/about-us">About us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`} href="/contact-us">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
