import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About () {
  return (
   <>
   <Navbar />
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
        <div className="scroll-container text-white">
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
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Linggom</h1>
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
  </main>
  {/* bootstrap lislance cdn  */}
   <Footer />
   </>
  )
}

export default About