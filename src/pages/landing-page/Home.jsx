import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Welcoming() {
    return (
        <>
    {/* welcoming start  */}
    <div className="w-100 pi-30 contain-welcome gap-3 d-flex justify-content-center align-items-center flex-column" style={{"height":"100vh"}}>
      <img className src="../../public/img/logo.svg" alt="logo" style={{"width":"200px"}} />
      <div className="w-100 contain-text-welcome d-flex flex-column">
        <div id="ganti" className="text-light w-100 justify-content-start d-flex flex-column" style={{"-webkit-text-align":"left","text-align":"left"}}>
          <h1 className="m-0 fw-bold fz-3" style={{color: "#FE8E4E"}}>Welcome</h1>
          <p className="m-0 fz-05">to Nuxez studio!</p>
          <p className="m-0 fz-05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, accusamus! Voluptate numquam dolores at nostrum maiores quidem, velit natus id quibusdam autem. Animi et illum, possimus asperiores error ullam quidem!</p>
        </div>
        <div className="w-100 mt-2 d-flex justify-content-start">
          <button className="px-5 py-2 fw-bold bg-transparent text-light" style={{"border":"1.5px solid #fff"}} onclick="document.getElementById('ganti').innerHTML=wellcome">TALK TO US</button>
        </div>
      </div>
    </div>
    {/* welcoming ending  */}
        </>
   )
}

function VisiMisi () {
    return (
    <>
    {/* Visi Misi Start */}
    <div className="w-100 py-5 gap-5 pi-30 d-flex flex-column text-light" style={{"background":"linear-gradient(130deg, rgba(0,0,0,1) 0%, rgba(56,56,56,1) 60%, rgba(85,85,85,1) 86%)"}}>
      <div className="w-100 d-flex flex-column">
        <h1 className="m-0 fw-bold" style={{color: "#FE8E4E"}}>Visi</h1>
        <p className="m-0">Membuat aplikasi yang bermanfaat bagi banyak orang, dengan mengutamakan kompleksitas user.</p>
      </div>
      <div className="w-100 d-flex flex-column">
        <h1 className="m-0 fw-bold" style={{color: "#FE8E4E"}}>Misi</h1>
        <p className="m-0">Membuka jasa pembuatan website maupun pengembangan suatu aplikasi web, dengan harga terjangkau.</p>
      </div>
    </div>
    {/* Visi Misi Ending */}
    </>
    )
}


function ServiceHome () {
    return (
    <>
    {/*   our service home start  */}
    <div className="w-100 mt-5 py-5 gap-3 text-light d-flex flex-column">
      <h1 className="pi-30 m-0 fw-bold fz-2">Our Service</h1>
      <div className="d-flex flex-row px-3 gap-3 overflow-x-auto w-100" style={{}}>
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
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">Website Builder</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum repellendus, dolorem fugiat aliquam corrupti est!</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
    {/*   our service home end  */}
    </>
    )
}

function AboutInHome () {
    return (
    <>
    {/* about us singkat start */}
    <div className="w-100 text-light d-flex flex-column mt-5 pi-30">
      <h1 className="m-0 fw-bold fz-2">About us</h1>
      <p className="m-0 fz-05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nesciunt cum facere dicta vitae perspiciatis hic, aliquid, asperiores sed, similique eaque dolorem! Quisquam itaque dicta fugiat voluptate velit at assumenda!</p>
      <div className="mt-2">
        <button className="bg-transparent text-light fw-bold py-2 px-4" style={{"border":"1.5px solid #fff"}}>LEARN &gt;&gt;&gt;</button>
      </div>
    </div>
    {/* about us singkat end */}
    </>
    )
}


function Home () {
  return (
   <>
   <Navbar />
   <main>
  <section className="container px-0 pb-5" style={{"padding-inline":"0 !important"}}>
    {/* isi content yang mau kamu develop didalam section main ya */}
    <Welcoming />
    <VisiMisi />
    <ServiceHome />
    <AboutInHome />
  </section>
   <Footer />
</main>
   </>
  )
}

export default Home