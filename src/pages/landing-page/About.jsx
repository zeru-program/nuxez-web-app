import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About () {
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
            <a className="nav-link active" href="/pages/about-us/">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pages/contact-us/">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/*  navbar end */}
  <main>
    <section className="container">
      {/* isi content yang mau kamu develop didalam section main ya */}
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div
          className="d-flex justify-content-center align-items-center flex-column w-100"
          style={{ height: "100vh" }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: 200 }}
          >
            <img
              style={{ width: 150 }}
              src="../../public/img/logo.svg"
              alt=""
            />
          </div>
          <div className="text-left text-white" style={{ marginLeft: 20 }}>
            <h1 style={{ fontWeight: 700, fontSize: 40 }}>About US</h1>
            <p style={{ wordWrap: "break-word", fontSize: 13 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              nostrum, repellendus nam doloribus laboriosam dignissimos adipisci
              maiores quas? Cumque, consectetur! Assumenda dolorum dolorem
              accusantium officiis impedit eius quasi a unde. Sint dolorum,
              beatae laboriosam velit nulla eius dolore. Laboriosam expedita
              deleniti in nulla aliquam id amet fugit obcaecati maxime? Cumque!
            </p>
          </div>
        </div>
        <div
          className="text-left text-white"
          style={{ marginLeft: 20, marginTop: 100 }}
        >
          <h1 style={{ fontWeight: 700, fontSize: 40 }}>Nuxez Studio.</h1>
        </div>
        <div className="scroll-container">
          <div className="scroll-container-outer">
            <div className="scroll-container-inner">
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Zeru</h1>
                  <p style={{ fontSize: 12 }}>
                    Web developer &amp; Full stack developer
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>IsRajul</h1>
                  <p style={{ fontSize: 12 }}>
                    Project Manager &amp; App developer
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Linggo</h1>
                  <p style={{ fontSize: 12 }}>Web developer</p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Januar</h1>
                  <p style={{ fontSize: 12 }}>Web developer</p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Fauzi</h1>
                  <p style={{ fontSize: 12 }}>
                    Q&amp;A Tester &amp; Web support
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Fauzi</h1>
                  <p style={{ fontSize: 12 }}>
                    Q&amp;A Tester &amp; Web support
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue" />
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Fauzi</h1>
                  <p style={{ fontSize: 12 }}>
                    Q&amp;A Tester &amp; Web support
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque temporibus hic harum alias odit voluptatem. A sequi
                    non commodi, provident ea recusandae quos nemo vitae
                    voluptatem ad dolores ipsam debitis ipsa omnis consequuntur
                    iste aperiam nam veniam, culpa odit quaerat consectetur.
                    Dolor alias maiores itaque iure provident accusantium quas
                    tempora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 100 }} />
    </section>
    <footer>
      <a
        className="text-light fw-bold text-decoration-none"
        style={{}}
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

export default About