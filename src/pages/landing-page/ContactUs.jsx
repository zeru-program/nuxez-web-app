import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ContactUs () {
  return (
   <>
   <Navbar />

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Nuxez Studio</title>
  <link
    rel="shortcut icon"
    href="../../public/img/logo/logo.png"
    type="image/x-icon"
  />
  {/* bootstrap lislance cdn  */}
  <link rel="stylesheet" href="../../public/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
  {/* styling local path  */}
  <link
    rel="stylesheet"
    href="../../public/css/style.css"
    type="text/css"
    media="all"
  />
  {/*  navbar start */}
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand nav-logo text-light fw-bold" href="#">
        <img src="../../public/img/logo-nav.png" style={{ width: 100 }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/pages/home/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pages/service-project/">
              Our Service &amp; Project
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pages/about-us/">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/pages/contact-us/">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*  navbar end */}
  <main>
    <section className="container pb-5">
      {/* isi content yang mau kamu develop didalam section main ya */}
      {/* Content ditambahkan dari sini */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <div className="d-flex flex-column" style={{ fontSize: 16 }}>
              <h1 className="text-center fz-2 text-light fw-bold">
                Contact Us
              </h1>
              <div className="ratio ratio-16x9 my-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222771.46199500587!2d106.829518!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2C%20Indonesia!5e1!3m2!1sid!2sde!4v1713439639186!5m2!1sid!2sde"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-left h5 gap-3 mt-3">
                <p className="bi bi-envelope"> Nuxez Studio@gmail.com</p>
                <p className="bi bi-instagram"> Nuxez Studio.id</p>
              </div>
            </div>
            <div className="d-flex flex-column" style={{ marginTop: 150 }}>
              <h2 className="text-left fe-bold">Feedback</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    title="Enter your name"
                    placeholder="Enter your name"
                    className="form-control"
                    id="name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    title="Enter your email address"
                    placeholder="Enter your email address"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    required=""
                  />
                  <div id="emailHelp" className="form-text text-white">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    title="Enter your message"
                    placeholder="Enter your message"
                    className="form-control"
                    id="message"
                    rows={3}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary gradient-button text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Content ditambahkan sampai sini */}
    </section>
    <footer>
      <a
        className="text-light fw-bold text-decoration-none"
        style={{ fontSize: 16 }}
        href="#"
      >
        Nuxez Studio.
      </a>
      <div className="d-flex gap-2 text-light">
        <i className="bi bi-envelope" />
        <i className="bi bi-instagram" />
        <i className="bi bi-youtube" />
        <i className="bi bi-whatsapp" />
      </div>
      <p className="text-light m-0">©2024-2025 all right reversed.</p>
    </footer>
  </main>
  {/* bootstrap lislance cdn  */}

   <Footer />
   </>
  )
}

export default ContactUs