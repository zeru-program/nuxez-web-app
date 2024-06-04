import { React, useEffect, useState } from 'react'
import Splash from './Splash'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutComponentDesc from './AboutComponentDesc'
import BtnLogin from './BtnLogin'


function Welcoming() {
    
    function HandleTalk () {
        
        var endpoint = 'https://api.whatsapp.com/send?'
        
        var phone = '6287815832805'
        
        var text = 'Hai, saya ingin mengenal lebih jauh lagi tentang Nuxez studio. bisa anda jelaskan apa saja yang nuxez produksi di setiap projek nya?'
        
        var resultApiV1 = endpoint + 'phone=' + phone + '&text=' + text
        
        window.open(resultApiV1)
    }
    
    return (
        <>
    {/* welcoming start  */}
    <div className="w-100 container pi-30 contain-welcome gap-3 d-flex justify-content-center align-items-center flex-column" style={{"height":"100vh"}}>
      <img className="wow animated bounceIn" src="/img/logo.svg" alt="logo" style={{"width":"200px"}} />
      <div className="w-100 wow fadeInLeft animated contain-text-welcome d-flex flex-column">
        <div id="ganti" className="text-light w-100 justify-content-start d-flex flex-column" style={{"-webkit-text-align":"left","text-align":"left"}}>
          <h1 className="m-0 wow fadeInLeft animated fw-bold fz-3" style={{color: "#FE8E4E"}}>Welcome</h1>
          <p className="m-0 fz-05">to Nuxez studio!</p>
          <p className="m-0 fz-05">Ingin membuat website atau aplikasi dengan harga terjangkau? atau kebutuhan lainnya? ada di nuxez studio! studio yang memproduksi website dan aplikasi dengan kualitas yang sangat baik. semua segi aspek kami perhatikan, jadi jangan kuatir atau segan untuk mencoba layanan kami.</p>
        </div>
        <div className="w-100 mt-2 d-flex justify-content-start">
          <button className="px-5 py-2 fw-bold bg-transparent text-light" style={{"border":"1.5px solid #fff"}} onClick={() => HandleTalk()}>TALK TO US</button>
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
    <div className="w-100 wow fadeIn animated py-5 gap-5 pi-30 d-flex flex-column text-light" style={{"background":"linear-gradient(130deg, rgba(0,0,0,1) 0%, rgba(56,56,56,1) 60%, rgba(85,85,85,1) 86%)", margin: "0 !important"}}>
      <div className="w-100 d-flex flex-column">
        <h1 className="m-0 fw-bold" style={{color: "#FE8E4E"}}>Visi</h1>
        <p className="m-0">Membuat aplikasi yang bermanfaat bagi banyak orang, dengan mengutamakan kompleksitas user.</p>
      </div>
      <div className="w-100 d-flex flex-column wow animated fadeIn">
        <h1 className="m-0 fw-bold" style={{color: "#FE8E4E"}}>Misi</h1>
        <p className="m-0">Membuka jasa pembuatan website maupun pengembangan suatu aplikasi web, dengan harga terjangkau.</p>
      </div>
    </div>
    {/* Visi Misi Ending */}
    </>
    )
}


function ServiceHome () {
    
    function handleOrder (service) {
        
        var endpoint = 'https://api.whatsapp.com/send?'
        
        var phone = '6287774487198'
        
        var message = 'Hi ! , saya ingin menggunakan jasa layanan yang tersedia di nuxez. saya ingin menggunakan jasa ' + service + ' apakah bisa dijelaskan lebih lanjut tentang layanan tersebut? terima kasih.'
        
        var resultApi = endpoint + 'phone=' + phone + '&text=' + message
        
        window.open(resultApi)
    }
    
    return (
    <>
    {/*   our service home start  */}
    <div className="w-100 container mt-5 py-5 gap-3 text-light d-flex flex-column">
      <h1 className="pi-30 m-0 fw-bold fz-2" id="service">Our Service</h1>
      <div className="d-flex flex-row px-3 gap-3 overflow-x-auto w-100" style={{}}>
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
    </div>
    {/*   our service home end  */}
    </>
    )
}

function AboutInHome () {
    return (
    <>
      <div className="pi-20 container">
      <AboutComponentDesc />
      </div>
      <div className="pi-30 container mt-2">
        <button className="bg-transparent text-light fw-bold py-2 px-4" style={{"border":"1.5px solid #fff"}} onClick={() => window.location.href='/about-us'}>LEARN &gt;&gt;&gt;</button>
      </div>
    </>
    )
}


function Home () {

  return (
   <>
   <Splash />
   <Navbar />
   <main>
  <section className="px-0 pb-5" style={{"padding-inline":"0 !important"}}>
    <Welcoming />
    <VisiMisi />
    <ServiceHome />
    <AboutInHome />
  </section>
   <Footer />
</main>
   <BtnLogin />
   </>
  )
}

export default Home
