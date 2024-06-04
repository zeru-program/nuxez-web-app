import { useAuth } from '../../AuthContext.jsx';

function BtnLogin () {
    const isAuthenticated = localStorage.getItem('isLogin');
    const isAdmin = localStorage.getItem('usn')

    function handleBtnLogin() {
        if (isAuthenticated) {
            window.location.href='/logout'
        } else {
            window.location.href='/login'
        }
    }
    
    return (
        <>
        <div className="position-fixed animated fadeInRight" style={{bottom:"50px",right:"10px",zIndex:"999"}}>
          <button className={`btn ${isAdmin === 'admin' && isAuthenticated ? "d-flex" : "d-none"} btn-warning`} onClick={() => window.location.href = "/panel"}>
              Panel admin
            <i className="bi mx-2 bi-arrow-right"></i>
          </button>
        </div>
        <div className="position-fixed animated fadeInRight" style={{bottom:"10px",right:"10px",zIndex:"999"}}>
          <button className={`btn ${isAuthenticated ? 'btn-danger' : 'btn-primary'}`} onClick={() => handleBtnLogin()}>
            { isAuthenticated ? 'Logout' : 'Login' }
            <i className="bi mx-2 bi-arrow-right"></i>
          </button>
        </div>
        </>
    )
}

export default BtnLogin