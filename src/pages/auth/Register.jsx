import { useEffect, useState } from 'react'
import Navbar from '../landing-page/Navbar'
import Footer from '../landing-page/Footer'
import { useAuth } from '../../AuthContext.jsx';


function Box () { 
    
    const [usnInput, setUsnInput] = useState('')
    const [passInput, setPassInput] = useState('')
    const { login } = useAuth();

    
    function handleInputUsn (e) {
        setUsnInput(e.target.value)
    }
    
    function handlePass(e) {
        setPassInput(e.target.value)
    }
    
    
    function handleBtn() {
    var resultAcc = {
        username: usnInput,
        password: passInput,
        created_at: new Date(),
        update_at: new Date()
    }
       if (usnInput === '' || passInput === '') {
           alert('isi semua input dengan benar!')
           return
       }
       if (usnInput === 'admin') {
           alert('username sudah digunakan, gunakan yang lain')
           return
       }
       if (usnInput.length < 5 || passInput.length < 5 ) {
        alert('username atau password harus lebih dari 5 kata')
           return
       }
        //alert(usnInput + passInput)
       fetch('https://nuxezstudio-default-rtdb.firebaseio.com/account.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(resultAcc)
            })
            .then(res => {
                if (res.ok) {
                    alert('successfuly created a account, now please login')
                    window.location.href = '/login?auth=done'
                } else {
                    alert("error!")
                }
            })
            .catch(e=> {
                alert(e)
            })
    }
    
    return (
   <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-light d-flex flex-column" style={{width:"300px",height:"250px"}}>
     <h3 className="text-light text-center">Register</h3>
          <label className="text-light text-left">Username</label>
          <input type="text" className="bg-transparent mb-3 text-light" style={{ border:"2px solid white", padding: "5px" }} onInput={handleInputUsn} required="required" />
          <label className="text-light text-left">Password</label>
          <input type="password" className="bg-transparent text-light" style={{ border:"2px solid white", padding: "5px" }} onInput={handlePass} required="required" />
          <button type="button" className="btn btn-outline-secondary text-light mt-4" onClick={handleBtn} >Create new account</button>
          <div className="mt-3 text-secondary text-center">
           <p className="m-0">already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
   </div>
    )
}

function Register () {
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

export default Register