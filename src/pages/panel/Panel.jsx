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
  <div className="mt-5 py-5 text-black">
  {/* <nav className="navbar navbar-inverse visible-xs">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          Logo
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Age</a>
          </li>
          <li>
            <a href="#">Gender</a>
          </li>
          <li>
            <a href="#">Geo</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  <div className="container-fluid mt-5">
    <div className="row content mt-4">
      <div className="col-sm-3 sidenav hidden-xs well">
        <ul className="nav nav-pills nav-stacked mt-2">
          <li className="active">
            <a href="#section1">Dashboard</a>
          </li>
          <li>
            <a href="#section2">Admins</a>
          </li>
          <li>
            <a href="#section3">Users</a>
          </li>
          <li>
            <a href="#section3">Devices</a>
          </li>
        </ul>
        <br />
      </div>
      <br />
      <div className="col-sm-9">
        <div className="well">
          <h4>Dashboard</h4>
          <p>Hallo admin!</p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="well">
              <h4>Users</h4>
              <p>1 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Pages</h4>
              <p>100 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Sessions</h4>
              <p>10 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Visitors</h4>
              <p>30 Millions</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="well">
              <p>Reports</p>
              <p>Messages</p>
              <p>Frauds</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Countries</p>
              <p>Continents</p>
              <p>Cities</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Blogs</p>
              <p>Posts</p>
              <p>Comments</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="well">
              <p>You have new message(s)!</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </div>
        <Footer />
      </>
  )
}

export default Panel