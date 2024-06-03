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
    <div className={`${splashOn} loadingio-spinner-dual-ball-2by998twmg8`}>
    <div className="con-ldio position-relative">
    <div className="ldio-yzaezf3dcmj">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
    </div>
    )
}

export default Splash