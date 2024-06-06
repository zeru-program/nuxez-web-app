import React from 'react'
import Navbar from '../landing-page/Navbar'
import Footer from '../landing-page/Footer'


function Panel () {
    const isLogin = localStorage.getItem("isLogin")
    const isAdmin = localStorage.getItem('usn')
    
    // if (!isLogin || isAdmin !== 'admin') {
    //     window.location.href="/?admin=false"
    //     return
    // }
    return (
      <>
        <Navbar />
        <div className="mt-5 py-5">
         <h1 className="text-light">Test panel</h1>
        </div>
        <Footer />
      </>
  )
}

export default Panel