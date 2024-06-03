import { useState } from 'react'
import Navbar from '../landing-page/Navbar'
import Footer from '../landing-page/Footer'


function Box () {
    return (
   <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="text-light d-flex flex-column" style={{width:"300px",height:"250px"}}>
     <h3 className="text-light text-center">Login</h3>
          <label className="text-light text-left">Username</label>
          <input type="text" className="bg-transparent mb-3 text-light" style={{ border:"2px solid white", padding: "5px" }} />
          <label className="text-light text-left">Password</label>
          <input type="password" className="bg-transparent text-light" style={{ border:"2px solid white", padding: "5px" }} />
          <button type="button" className="btn btn-outline-secondary text-light  mt-4">Login</button>
          <div className="mt-3 text-secondary text-center">
           <p className="m-0">don't have an account? <a href="/register">Register</a></p>
          </div>
        </div>
   </div>
    )
}


function Login () {
  return (
   <>
   <Navbar />
   <Box />
   <Footer />
   </>
  )
}

export default Login