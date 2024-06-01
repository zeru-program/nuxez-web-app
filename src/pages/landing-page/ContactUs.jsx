import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ContactUsMap(){
  return(
    <>
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
              <div className="text-left text-white h5 gap-3 mt-3">
                <p className="bi bi-envelope"> Nuxez Studio@gmail.com</p>
                <p className="bi bi-instagram"> Nuxez Studio.id</p>
              </div>
    </>
  )
}

function ContactUs () {
  return (
   <>
   <Navbar />
  <main>
    <section className="container pt-5 pb-5">
      {/* Content ditambahkan dari sini */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contact-form">
            <div className="d-flex flex-column" style={{ fontSize: 16 }}>
              <h1 className="text-center fz-2 text-light fw-bold pt-5">
                <p>Contact Us</p>
              </h1>
              <ContactUsMap />
            </div>
            <div className="d-flex flex-column" style={{ marginTop: 150 }}>
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
   </>
  )
}

export default ContactUs