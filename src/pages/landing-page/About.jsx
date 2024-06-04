import { useState } from 'react'
import Splash from './Splash'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutComponentDesc from './AboutComponentDesc'
import BtnLogin from './BtnLogin'

function About () {
    let memberDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus hic harum alias odit voluptatem. A sequi non commodi, provident ea recusandae quos nemo vitae voluptatem ad dolores ipsam debitis ipsa omnis consequuntur iste aperiam nam veniam, culpa odit quaerat consectetur. Dolor alias maiores itaque iure provident accusantium quas tempora.';
  return (
   <>
   <Splash />
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
            <img className="animated bounceIn"
              style={{ width: 150 }}
              src="/img/logo.svg"
              alt=""
            />
          </div>
          <AboutComponentDesc />
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
                <div className="gradient-blue overflow-hidden">
                 <img src="/img/zeru-member.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Zeru</h1>
                  <p style={{ fontSize: 12 }}>
                    Web developer
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue overflow-hidden">
                 <img src="/img/isra-member.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Israjul</h1>
                  <p style={{ fontSize: 12 }}>
                    App developer
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
             <div className="gradient-blue overflow-hidden">
                 <img src="/img/default.png" alt="img member" className="w-100" />
                </div>     <div className="text-informasi">
                    <h1 style={{ fontWeight: 700, fontSize: 25 }}>John</h1>
                    <p style={{ fontSize: 12 }}>
                      Q&amp;A Tester &amp; Web support
                    </p>
                    <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                      {memberDesc}
                    </p>
                  </div>
                </div>
              <div className="scroll-box">
               <div className="gradient-blue overflow-hidden">
                 <img src="/img/linggo-member.png" alt="img member" className="w-100" />
                </div>       <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Linggom</h1>
                  <p style={{ fontSize: 12 }}>Web developer</p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue overflow-hidden">
                 <img src="/img/default.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Januar</h1>
                  <p style={{ fontSize: 12 }}>Web developer</p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
                <div className="gradient-blue overflow-hidden">
                 <img src="/img/fauzi-member.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Fauzi</h1>
                  <p style={{ fontSize: 12 }}>
                    Q&amp;A Tester &amp; Web support
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
               <div className="gradient-blue overflow-hidden">
                 <img src="/img/ghanim-member.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                    <h1 style={{ fontWeight: 700, fontSize: 25 }}>Ghanim</h1>
                    <p style={{ fontSize: 12 }}>
                      Q&amp;A Tester &amp; Web support
                    </p>
                    <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                      {memberDesc}
                    </p>
                  </div>
              </div>
              <div className="scroll-box">
               <div className="gradient-blue overflow-hidden">
                 <img src="/img/default.png" alt="img member" className="w-100" />
                </div>  
                <div className="text-informasi">
                  <h1 style={{ fontWeight: 700, fontSize: 25 }}>Axelle</h1>
                  <p style={{ fontSize: 12 }}>
                    Q&amp;A Tester &amp; Web support
                  </p>
                  <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                    {memberDesc}
                  </p>
                </div>
              </div>
              <div className="scroll-box">
               <div className="gradient-blue overflow-hidden">
                 <img src="/img/default.png" alt="img member" className="w-100" />
                </div>
                <div className="text-informasi">
                    <h1 style={{ fontWeight: 700, fontSize: 25 }}>Najih</h1>
                    <p style={{ fontSize: 12 }}>
                      Q&amp;A Tester &amp; Web support
                    </p>
                    <p style={{ fontSize: 12, wordWrap: "break-word" }}>
                      {memberDesc}
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
   <Footer />
   <BtnLogin />
   </>
  )
}

export default About
