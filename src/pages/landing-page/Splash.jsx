import {useEffect, useState} from "react"

function Splash () {
    
    const [splashOn, setSplashOn] = useState("d-flex")
    useEffect(() => {
    const timer = setTimeout(() => {
      setSplashOn('d-none');
    }, 1500);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  
    return (
    <div className={`${splashOn} text-light con-splash`}>
    <div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
    )
}

export default Splash