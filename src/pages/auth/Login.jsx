import { useState } from 'react'
import Navbar from '../landing-page/Navbar'
import Footer from '../landing-page/Footer'


function Box () {
    
    const [usn, setUsn] = useState('')
    const [pass, setPass] = useState("")
    
    function handleIptUsn(e) {
        setUsn(e.target.value)
    }
    function handleIptPass(e) {
        setPass(e.target.value)
    }
    
    function handleLogin() {
     //   alert(usn + ' ' + pass)
       fetch('https://nuxezstudio-default-rtdb.firebaseio.com/account.json')
         .then(res => res.json())
         .then(data => {
            let found = false;
            for (let key in data) {
              var val = data[key]
              if (usn === val.username && pass === val.password) {
                found = true;
                localStorage.setItem('isLogin', true)
                localStorage.setItem('key', key)
                localStorage.setItem('usn', usn)
                localStorage.setItem('pass', pass)
                window.location.href = "/?auth=attempt&login=true"
                break; // exit the loop since we found a match
              }
            }
            if (!found) {
              alert('username atau password salah')
            }
               })
       .catch(e=>alert(e))
    }
    
    return (
   <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-light d-flex flex-column" style={{width:"300px",height:"250px"}}>
     <h3 className="text-light text-center">Login</h3>
          <label className="text-light text-left">Username</label>
          <input type="text" className="bg-transparent mb-3 text-light" style={{ border:"2px solid white", padding: "5px" }} onInput={handleIptUsn} />
          <label className="text-light text-left">Password</label>
          <input type="password" className="bg-transparent text-light" style={{ border:"2px solid white", padding: "5px" }} onInput={handleIptPass} />
          <button type="button" onClick={handleLogin} className="btn btn-outline-secondary text-light  mt-4">Login</button>
          <div className="mt-3 text-secondary text-center">
           <p className="m-0">Don't have an account? <a href="/register">Register</a></p>
          </div>
        </div>
   </div>
    )
}


function Login () {
    
    const isLogin = localStorage.getItem("isLogin")
    
    if (isLogin) {
        window.location.href="/?auth=rejected"
        return
    }
    
  return (
   <>
   <Navbar />
   <Box />
   <Footer />
   </>
  )
}

export default Login