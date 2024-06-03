

function Footer() {
    let startYear = 2024;
    let currentYear = (new Date().getFullYear());
  return(
  <>
  <footer className="text-center text-lg-start bg-body-tertiary text-white">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-facebook" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-youtube" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-whatsapp" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-envelope" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-github" />
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="bi bi-gem me-3" />
              Nuxez Studio Indonesia
            </h6>
            <p>
              Nuxez Studio Indonesia merupakan sebuah komunitas yang menggemari bahasa pemrograman. Kami membentuk wadah untuk kami bisa saling berkembang dengan berdiskusi dan mengerjakan projek-projek yang dinilai mampu mendongkrak potensi setiap anggota di dalamnya.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products & Service </h6>
            <p>
              <a href="/#service" className="text-reset">
                Website builder
              </a>
            </p>
            <p>
              <a href="/#service" className="text-reset">
                Application builder
              </a>
            </p>
            <p>
              <a href="/#service" className="text-reset">
                Designer
              </a>
            </p>
            <p>
              <a href="/#service" className="text-reset">
                Source code
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
            <p>
              <a href="/" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="/our-service" className="text-reset">
                Our Service
              </a>
            </p>
            <p>
              <a href="/about-us" className="text-reset">
                About us
              </a>
            </p>
            <p>
              <a href="/contact-us" className="text-reset">
                Contact us
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> Jakarta, Indonesia
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              nuxezstudio2024@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> +6287774487198
            </p>
            <p>
              <i className="fas fa-print me-3" /> +6287815832805
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      className="text-center w-100 px-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <p className="text-light m-0">Version app 1.0.0</p>
          <p className="text-light m-0">Copyright &copy;
            {startYear == 2024 ? startYear : startYear + ' - ' + currentYear}
           Nuxez studio.  all right reversed.</p>
    </div>
  </footer>
</>

  )

}

export default Footer