import { useAuth } from '../../AuthContext.jsx';

function BtnLogin () {
    const { isAuthenticated } = useAuth();

    function handleBtnLogin() {
        if (isAuthenticated) {
            window.location.href='/logout'
        } else {
            window.location.href='/login'
        }
    }
    
    return (
        <div className="position-fixed animated fadeInRight" style={{bottom:"10px",right:"10px",zIndex:"999"}}>
          <button className={`btn ${isAuthenticated ? 'btn-danger' : 'btn-primary'}`} onClick={() => handleBtnLogin()}>
            { isAuthenticated ? 'Logout' : 'Login' }
            <i className="bi mx-2 bi-arrow-right"></i>
          </button>
        </div>
    )
}

export default BtnLogin