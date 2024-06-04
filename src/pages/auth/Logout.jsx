
function Logout() {
         localStorage.removeItem('isLogin')
         localStorage.removeItem('key')
         localStorage.removeItem('usn')
         localStorage.removeItem('pass')
        return window.location.href = "/?logout=success"
}
export default Logout