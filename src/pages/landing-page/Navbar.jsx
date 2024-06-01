import { useState } from 'react'

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand nav-logo text-light fw-bold" href="#"><img src="/img/logo-nav.png" style={{"width":"100px"}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/pages/home/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/service-project/">Our Service &amp; Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/about-us/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pages/contact-us/">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar