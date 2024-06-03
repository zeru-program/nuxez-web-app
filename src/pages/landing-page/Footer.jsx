/*
    let startYear = 2024;
    let currentYear = (new Date().getFullYear());
    return (
      <footer>
        <a className="text-light fw-bold text-decoration-none" style={{ "font-size": "16px" }} href="/">Nuxez Studio.</a>
        <div className="d-flex gap-2 text-light">
          <i className="bi bi-envelope" />
          <i className="bi bi-instagram" />
          <i className="bi bi-youtube" />
          <i className="bi bi-whatsapp" />
        </div>
        <p className="text-light m-0">Copyright &copy; {startYear == 2024 ? startYear : startYear + ' - ' + currentYear} all right reversed.</p>
      </footer>
    )
  */
function Footer() {

  return(
  /*
    let startYear = 2024;
    let currentYear = (new Date().getFullYear());
    return (
      <footer>
        <a className="text-light fw-bold text-decoration-none" style={{ "font-size": "16px" }} href="/">Nuxez Studio.</a>
        <div className="d-flex gap-2 text-light">
          <i className="bi bi-envelope" />
          <i className="bi bi-instagram" />
          <i className="bi bi-youtube" />
          <i className="bi bi-whatsapp" />
        </div>
        <p className="text-light m-0">Copyright &copy; {startYear == 2024 ? startYear : startYear + ' - ' + currentYear} all right reversed.</p>
      </footer>
    )
  */
  <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-white">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
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
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="bi bi-gem me-3" />
              Nuxez Studio Indonesia
            </h6>
            <p>
              Nuxez Studio Indonesia merupakan sebuah komunitas yang menggemari bahasa pemrograman. Kami membentuk wadah untuk kai bisa saling berkembang dengan berdiskusi dan mengerjakan projek-projek yang dinilai mampu mendongkrak potensi setiap anggota di dalamnya.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> Jakarta, Indonesia
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              nuxezstudio@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 87
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 88
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2024 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Nuxes Studio Indonesia
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )

}

export default Footer