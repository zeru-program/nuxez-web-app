import { useState } from 'react'
import Splash from './Splash'
import Navbar from './Navbar'
import Footer from './Footer'
import BtnLogin from './BtnLogin'

function ContactUsMap(){
  return(
    <>
      <div className="text-center text-white animated fadeIn h4 mt-3">
        <p className="bi bi-envelope"> nuxezstudio2024@gmail.com</p>
        <p className="bi bi-instagram"> nuxezstudio.id</p>
      </div>
    </>
  )
}

function ContactUs () {
  return (
   <>
   <Splash />
   <Navbar />
  <main>
    <section className="container pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <div className="d-flex flex-column" style={{ fontSize: 16 }}>
              <h1 className="text-center fz-2 text-light fw-bold">
                <p className="animated fadeInLeft">Contact Us</p>
              </h1>
              <ContactUsMap />
            </div>
            <div className="d-flex flex-column fadeIn animated" style={{ marginTop: 25 }}>
              <h2 className="text-left text-white fe-bold">Feedback</h2>
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
                    <p>We'll never share your email with anyone else.</p>
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
  </main>

   <Footer />
   <BtnLogin />
   </>
  )
}

export default ContactUs
