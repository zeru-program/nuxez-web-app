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
        <Navbar />
        <section className="content">
  <ol className="breadcrumb breadcrumb-offset">
    <li>
      <a href="dashboard.php">Dashboard</a>
    </li>
    <li className="active">Home</li>
  </ol>
  <div className="container-fluid" id="fade-in">
    <div className="row">
      <a href="category.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_category; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">view_list</i>
            </div>
            <div className="color-class-name">
              Total {/*?php echo $total_category; ?*/} Categories
            </div>
            <br />
          </div>
        </div>
      </a>
      <a href="news.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_news; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">library_books</i>
            </div>
            <div className="color-class-name">
              Total {/*?php echo $total_news; ?*/} News
            </div>
            <br />
          </div>
        </div>
      </a>
      <a href="ads.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_ads; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">monetization_on</i>
            </div>
            <div className="color-class-name">App Monetization</div>
            <br />
          </div>
        </div>
      </a>
      {/*?php if ($login_feature == 'yes') { ?*/}
      <a href="comment.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_comment; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">comment</i>
            </div>
            <div className="color-class-name">Users Comment</div>
            <br />
          </div>
        </div>
      </a>
      <a href="report.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_report; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">report</i>
            </div>
            <div className="color-class-name">
              Users feedbacks &amp; reports
            </div>
            <br />
          </div>
        </div>
      </a>
      <a href="user.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_user; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">verified_user</i>
            </div>
            <div className="color-class-name">
              Total {/*?php echo $total_users; ?*/} Users
            </div>
            <br />
          </div>
        </div>
      </a>
      {/*?php } ?*/}
      <a href="notification.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_notification; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">notifications</i>
            </div>
            <div className="color-class-name">
              Total {/*?php echo $total_fcm; ?*/} Templates
            </div>
            <br />
          </div>
        </div>
      </a>
      <a href="admin.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_administrator; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">people</i>
            </div>
            <div className="color-class-name">Admin Panel Privileges</div>
            <br />
          </div>
        </div>
      </a>
      <a href="settings.php">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="card corner-radius demo-color-box bg-blue waves-effect col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_settings; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">settings</i>
            </div>
            <div className="color-class-name">Key and Privacy Settings</div>
            <br />
          </div>
        </div>
      </a>
      <a href="apps.php">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div className="card demo-color-box bg-blue waves-effect corner-radius col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_app; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">adb</i>
            </div>
            <div className="color-class-name">Apps and Redirect</div>
            <br />
          </div>
        </div>
      </a>
      <a href="license.php">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div className="card demo-color-box bg-blue waves-effect corner-radius col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_license; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">vpn_key</i>
            </div>
            <div className="color-class-name">Item purchase code</div>
            <br />
          </div>
        </div>
      </a>
      <a href="logout.php">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div className="card demo-color-box bg-blue waves-effect corner-radius col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <div className="color-name uppercase">
              {/*?php echo $menu_logout; ?*/}
            </div>
            <div className="color-name">
              <i className="material-icons">power_settings_new</i>
            </div>
            <div className="color-class-name">Logout admin panel</div>
            <br />
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

        </>
     )
}

export default Panel