import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



function ServiceP () {
    return (
        <>
    {/* service start */}
    <div className="w-100 d-flex flex-column pi-30 mt-5 text-light">
      <h1 className="fw-bold fz-2 m-0">Service</h1>
      <p className="m-0 fz-05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, alias reprehenderit ipsum fuga iusto officiis totam maxime. Velit, dolore modi.</p>
    </div>
    <div className="w-100 d-flex pi-30 mt-3 flex-wrap gap-3 text-light">
      <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
        <h1 className="m-0 fw-bold">Website Builder</h1>
        <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellendus, dolorem fugiat aliquam corrupti est!</p>
        <div className="w-100 d-flex justify-content-start">
          <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}}>ORDER &gt;&gt;&gt;</button>
        </div>
      </div>
      <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
        <h1 className="m-0 fw-bold">Website Builder</h1>
        <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellendus, dolorem fugiat aliquam corrupti est!</p>
        <div className="w-100 d-flex justify-content-start">
          <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}}>ORDER &gt;&gt;&gt;</button>
        </div>
      </div>
      <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
        <h1 className="m-0 fw-bold">Website Builder</h1>
        <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellendus, dolorem fugiat aliquam corrupti est!</p>
        <div className="w-100 d-flex justify-content-start">
          <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}}>ORDER &gt;&gt;&gt;</button>
        </div>
      </div>
      <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
        <h1 className="m-0 fw-bold">Website Builder</h1>
        <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellendus, dolorem fugiat aliquam corrupti est!</p>
        <div className="w-100 d-flex justify-content-start">
          <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}}>ORDER &gt;&gt;&gt;</button>
        </div>
      </div>
    </div>
    {/* service end */}
        </>
    )
}

function Project () {
    return (
        <>
    {/*   project start  */}
    <div className="w-100 d-flex flex-column pi-30 mt-5 text-light">
      <h1 className="fw-bold fz-2 m-0">Project</h1>
      <p className="m-0 fz-05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, alias reprehenderit ipsum fuga iusto officiis totam maxime. Velit, dolore modi.</p>
    </div>
    <div className="d-flex flex-row text-light pi-30 mt-3 gap-3 overflow-x-auto scroll-project">
      <div className="rounded-2 pb-2 overflow-hidden d-flex gap-1 align-items-start flex-column box-service" style={{"background":"#000000","height":"auto !important"}} onclick="window.location.href = 'https://'">
        <img src className="w-100" style={{"height":"200px","background-image":"linear-gradient(to right, #445dec, #6f0ed6)","color":"rgb(42, 48, 214)"}} alt />
        <div className="d-flex flex-column px-2">
          <h3 className="m-0 fw-bold">Calculator Apps</h3>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Monday, 02-04-2024 (comimg soon)</p>
        </div>
      </div>
      <div className="rounded-2 pb-2 overflow-hidden d-flex gap-1 align-items-start flex-column box-service" style={{"background":"#000000","height":"auto !important"}} onclick="window.location.href = 'https://'">
        <img src className="w-100" style={{"height":"200px","background-image":"linear-gradient(to right, #445dec, #6f0ed6)","color":"rgb(42, 48, 214)"}} alt />
        <div className="d-flex flex-column px-2">
          <h3 className="m-0 fw-bold">Calculator Apps</h3>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Monday, 02-04-2024 (comimg soon)</p>
        </div>
      </div>
      <div className="rounded-2 pb-2 overflow-hidden d-flex gap-1 align-items-start flex-column box-service" style={{"background":"#000000","height":"auto !important"}} onclick="window.location.href = 'https://'">
        <img src className="w-100" style={{"height":"200px","background-image":"linear-gradient(to right, #445dec, #6f0ed6)","color":"rgb(42, 48, 214)"}} alt />
        <div className="d-flex flex-column px-2">
          <h3 className="m-0 fw-bold">Calculator Apps</h3>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Monday, 02-04-2024 (comimg soon)</p>
        </div>
      </div>
    </div>
    {/*   project end */}
        </>
    )
}

function Service () {
  return (
   <>
   <Navbar />
   <main>
  <section className="container pt-5 pb-5">
    {/* isi content yang mau kamu develop didalam section main ya */}
    <ServiceP />
    <Project />
  </section>
   <Footer />
</main>
   </>
  )
}

export default Service