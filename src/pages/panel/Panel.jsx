import React from 'react'
import Navbar from '../landing-page/Navbar'


function Panel () {
    const isLogin = localStorage.getItem("isLogin")
    const isAdmin = localStorage.getItem('usn')
    
    // if (!isLogin || isAdmin !== 'admin') {
    //     window.location.href="/?admin=false"
    //     return
    // }
    return (
      <>
        <p>Hi</p>
      </>
  )
}

export default Panel