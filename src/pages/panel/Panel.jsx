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
        <p>Hi</p>
        <Footer />
      </>
  )
}

export default Panel