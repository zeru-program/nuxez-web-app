import { useState } from 'react'
import Splash from './Splash'
import Navbar from './Navbar'
import Footer from './Footer'
import BtnLogin from './BtnLogin'



function ServiceP () {
    
    
    function handleOrder (service) {
        
        var endpoint = 'https://api.whatsapp.com/send?'
        
        var phone = '6287774487198'
        
        var message = 'Hi ! , saya ingin menggunakan jasa layanan yang tersedia di nuxez. saya ingin menggunakan jasa ' + service + ' apakah bisa dijelaskan lebih lanjut tentang layanan tersebut? terima kasih.'
        
        var resultApi = endpoint + 'phone=' + phone + '&text=' + message
        
        window.open(resultApi)
    }
    
    return (
        <>
    {/* service start */}
    <div className="w-100 d-flex wow fadeInDown animated flex-column pi-30 mt-5 text-light">
      <h1 className="fw-bold fz-2 m-0">Service</h1>
      <p className="m-0 fz-05">Kami memperhatikan semua aspek kualitas dalam product dan sangat cepat menyesuaikan dalam tech modern.</p>
    </div>
    <div className="w-100 wow animated fadeIn d-flex pi-30 mt-3 flex-wrap gap-3 text-light">
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">Website Builder</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Kami membuka jasa layanan pembuatan website dari 0 sampai publish ke google maupun sesuai kebutuhan mu.</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}} onClick={() => handleOrder('web builder')}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">App builder</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Kami membuka jasa layanan pembuatan Aplikasi berbasis android, kami bisa membuat aplikasi sesuai kebutuhan anda.</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}} onClick={() => handleOrder('aplikasi builder')}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">UI/UX Designer</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Kami membuka jasa layanan pembuatan design untuk website maupun aplikasi dengan menggunakan elemen UI yang modern.</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}} onClick={() => handleOrder('UI UX DESIGNER')}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">Source code website/apk</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Kami menjual source code website maupun aplikasi yang sangat bermanfaat untuk anda dengan harga terjangkau! banyak pilihan bisa kalian pilih.</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}} onClick={() => handleOrder('source code web/apk')}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
        <div className="rounded-2 d-flex px-3 gap-3 justify-content-center align-items-start flex-column box-service" style={{"background":"#000000"}}>
          <h1 className="m-0 fw-bold">Logo maker</h1>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>Kami menerima pembuatan logo sesuai kebutuhan mu, dengan menggunakan elemen yang modern dan clean.</p>
          <div className="w-100 d-flex justify-content-start">
            <button className="fw-bold bg-light border-0 py-1 px-3" style={{"color":"#000000"}} onClick={() => handleOrder('web builder')}>ORDER &gt;&gt;&gt;</button>
          </div>
        </div>
    </div>
    {/* service end */}
        </>
    )
}

function ProjectComponent () {
    return (
      <div className="rounded-2 pb-2 overflow-hidden d-flex gap-1 align-items-start flex-column box-service" style={{"background":"#000000","height":"auto !important"}} onclick="window.location.href = 'https://'">
        <img src className="w-100" style={{"height":"200px","background-image":"linear-gradient(to right, #445dec, #6f0ed6)","color":"rgb(42, 48, 214)"}} alt />
        <div className="d-flex flex-column px-2">
          <h3 className="m-0 fw-bold">NuxApp (chatting chat)</h3>
          <p className="m-0 fz-05" style={{"padding-right":"20px"}}>(coming soon)</p>
        </div>
      </div>
    )
}

function Project () {
    return (
        <>
    {/*   project start  */}
    <div className="w-100 d-flex flex-column pi-30 mt-5 text-light">
      <h1 className="fw-bold fz-2 m-0">Project</h1>
      <p className="m-0 fz-05">Berikut adalah beberapa project yang telah kami kerjakan sekaligus menjadi portofolio kami.</p>
    </div>
    <div className="d-flex flex-row text-light pi-30 mt-3 gap-3 overflow-x-auto scroll-project">
     <ProjectComponent />
    </div>
    {/*   project end */}
        </>
    )
}

function Service () {
  return (
   <>
   <Splash />
   <Navbar />
   <main className='mt-2'>
  <section className="container pt-5 pb-5 mt-5">
    {/* isi content yang mau kamu develop didalam section main ya */}
    <ServiceP />
    <Project />
  </section>
   <Footer />
</main>
<BtnLogin />
   </>
  )
}

export default Service
