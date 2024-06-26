

function Footer() {
  let startYear = 2024;
  let currentYear = (new Date().getFullYear());
  let space = " ";
  return(
  <>
  <footer className="text-center text-lg-start bg-body-tertiary text-white">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=61560114616142" target='_blank' className="me-4 text-reset">
          <i className="bi bi-facebook" />
        </a>
        <a href="https://www.instagram.com/nuxezstudio/" target='_blank' className="me-4 text-reset">
          <i className="bi bi-instagram" />
        </a>
        <a href="https://www.youtube.com/linggommarpaung31" target='_blank' className="me-4 text-reset">
          <i className="bi bi-youtube" />
        </a>
        <a href="https://chat.whatsapp.com/Ch7ni7hyHNhHoKSA8xowK7" target='_blank' className="me-4 text-reset">
          <i className="bi bi-whatsapp" />
        </a>
        <a href="mailto:nuxezstudio@gmail.com" target='_blank' className="me-4 text-reset">
          <i className="bi bi-envelope" />
        </a>
        <a href="https://github.com/nuxezstudio" target='_blank' className="me-4 text-reset">
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
             Nuxez Studio Indonesia merupakan sebuah komunitas yang menggemari bahasa pemrograman. Kami membentuk wadah untuk bisa saling berkembang dengan berdiskusi dan mengerjakan projek-projek yang dinilai mampu mendongkrak potensi setiap anggota di dalamnya.
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
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="bi bi-map me-3" /> Jakarta, Indonesia
            </p>
            <p>
              <i className="bi bi-envelope me-3" />
              nuxezstudio2024@gmail.com
            </p>
            <p>
              <i className="bi bi-phone me-3" /> +6287774487198
            </p>
            <p>
              <i className="bi bi-phone me-3" /> +6287815832805
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      className="text-center w-100 px-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          <p className="text-light m-0">App Version: 1.0.0</p>
          <p className="text-light m-0">Copyright &copy; {space}
            {startYear == 2024 ? startYear + space: startYear + ' - ' + currentYear + space}
            Nuxez Studio Indonesia.  All rights reversed.</p>
    </div>
  </footer>
</>

  )

}

export default Footer