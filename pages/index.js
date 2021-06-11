import Head from 'next/head'
// import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
// import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

export default function Home() {

  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
    // console.log(scrollY);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
      setWidth(window.innerWidth);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

      <header className="header">
        <nav className={`navbar ${scrollY > 10 ? 'active' : ''} navbar-expand-lg fixed-top py-1`}>
          <div className="container">
            <a href="#" className="navbar-brand text-uppercase font-weight-bold">
              {width < 991 ? <img className="cpt-logo" src="/images/logo.png" /> :
                <>
                  {scrollY > 10 ? <img className="cpt-logo" src="/images/logo.png" /> :
                    <img className="cpt-logo" width='150' src="/images/logo-white-full.png" />}
                </>
              }
            </a>
            <button onClick={() => setMenu(!menu)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>

            <div id="navbarSupportedContent" className={`${menu ? 'show' : ''} collapse navbar-collapse justify-content-center`}>
              <ul className="navbar-nav">
                <li className="nav-item pl-3 active"><a href="#" className="nav-link">Home <span className="sr-only">(current)</span></a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">About Us</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Tours</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Bike Rentals</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Attractions</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">FAQ</a></li>
                <li className="nav-item pl-3"><a href="#" className="nav-link">Blog</a></li>
                <li className="nav-item btn-cpt"><a href="#" className="nav-link text-light">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container-fluid bg-cpt pl-0 pr-0">


        <video autoplay="true" muted
          className="video"
          loop id="myVideo">
          <source src="https://cdn-cf-east.streamable.com/video/mp4/m7bc6d.mp4?Expires=1623665940&Signature=BiVRzgMKni-exdBmeRWl77mJ5ef0iY7hlUYM8U54Mvc0Pnw4N4smYpj0UdXjrVXpORrDFdSu0dopmb4OkGVKcd-hpsBNg2MXKhOuYRw8KoYNfNB5PUFKPBgMVaBQLtCDMvRa5eZ55VWP-YvOWdYIMfdfoTlJcd-LpL3Q5RNBsQI-rfC1N~JpZ9bRp41yTbPvEW4bCAKvnAaT5iY5dJ5AYoBwCjcwbt7Bqb8ODusWXyAWhXA5yXIZD2Ll8NK5MDR9Mrz0eGQ2N~hlMh0lL30Gxs1vdk4Fd0NrC8TMuTFmKVeR0FK6MuHZ6cLRnmgrz7AOubpZL5Ri8-WEj3jIAgJSbg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"

            type="video/mp4" />
        </video>






        <div className="pt-5 text-white text-center" style={{ position: "relative" }}>
          <header className="py-5 mt-5">
            <h2 className="display-4">Welcome to</h2>
            <h1 className="" style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '50px' }}>Central Park Tours</h1>
            <hr className="home-hr"></hr>

            <p className="lead mb-0">
              <b>The leader in providing bike rentals and various tours in New York.</b>
            </p>
            <p className="lead mb-0">
              <b>Reserve your tour now and explore the oasis in the middle of Manhattan.</b>
            </p>

          </header>

          <section className="pt-5">
            <span className="btn-explore mx-auto">
              EXPLORE THE TOURS
            <i style={{ color: '#9bd230' }} className="pl-2 fas fa-arrow-circle-down"></i>
            </span>
            <div className="pt-4 mx-auto">
              <i className="fa fa-phone fa-rotate-90" aria-hidden="true"></i>
              <span className="pl-2">Book over the phone: (347) 746-8687</span>
            </div>

          </section>


          <section className="container text-dark pt1">

            {/* <div className="row justify-content-between">
              <div className="col-4">
                <div>Check out our</div>
                <h2 style={{ fontWeight: 800 }}><b style={{ color: '#9bd230' }}>Featured </b>tours</h2>

              </div>
              <div className="col-4 font-weight-bold text-uppercase bbottom">
                View All
              </div>
            </div> */}
            <div className="ml-5 mr-5">
              <div className="d-flex justify-content-start text-1">Check out our</div>
              <div className="d-flex justify-content-start">
                <h2 style={{ fontWeight: 800 }}><b style={{ color: '#88bc2c' }}>Featured </b>tours</h2>
              </div>
              <div className="d-flex justify-content-end font-weight-bold text-uppercase bbottom">View All</div>

            </div>



            {/* cards */}
            <div className="card-group pt-3">

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  <div className="mr-5 mt-3 trending text-uppercase">Trending</div>
                  <div className="ml-5 mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <img className="card-img-top p-3" src="/images/bike-tours.png" alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  <div className="mr-5 mt-3 trending text-uppercase">Trending</div>
                  <div className="ml-5 mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <img className="card-img-top p-3" src="/images/electric-bike.png" alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

              <div className="card card-v">
                <span className="d-flex justify-content-center">
                  {/* <div className="mr-5 mt-3 trending">Trending</div> */}
                  <div style={{ marginLeft: 180 }} className="mt-3 font-weight-bold text-muted">$53/2h</div>
                </span>
                <small style={{ marginLeft: 180, marginTop: '-7px', color: '#babbbb' }}>per person</small>

                <img className="card-img-top p-3" src="/images/pedicab-tours.png" alt="Card image cap" />
                <div className="card-body" style={{ marginTop: -20 }}>
                  <h5 style={{ color: '#535150' }} className="card-title font-weight-bold pb-3">Central Park E-Bike Tour</h5>
                  <p className="btn-reserve text-uppercase">Reserve now</p>
                </div>
              </div>

            </div>
            {/* end cards */}

            <div className="container" style={{ color: '#535150', letterSpacing: '1px' }}>
              <p style={{ fontSize: 25 }} className="d-flex justify-content-start pl-4 pt-5 mt-5">Our tours are top rated on Tripadvisor!</p>
              <b className="d-flex justify-content-start pl-4">SEE TESTIMONIALS</b>
            </div>


          </section>

          <section className="about">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f8" fill-opacity="1" d="M0,96L80,96C160,96,320,96,480,117.3C640,139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            <div className="container-fluid" style={{ background: '#f9f9f8', color: '#707171' }}>

              <div class="fl-box">

                <div class="first text-left mx-auto">
                  <small className="h4 font-weight-normal" style={{ color: '#535150' }}>Learn more</small>
                  <h3 className="pt-2 pb-4 h1" style={{ fontWeight: 800, color: '#3d3d3c' }}>About Us</h3>
                  <p><b>We are thrilled to introduce you to one of the world’s most beautiful parks - Central Park.</b></p>

                  <p>Established in 2003, our company has been the leader in providing bike rentals and various
                  tours in Central Park. We offer pedicab tours, bicycle tours, bike rentals, picnic
                  arrangements and horse and carriage rides.</p>
                  <p>Feel free to take advantage of our attractions page, where you can find a detailed
                  Central Park map, top things to do in Central Park and of course get access to our
                  award winning self-guided audio tour of Central Park.</p>

                  <br></br>
                  <i>Wondering exactly how big is Central Park? Where is the Central Park zoo located at?
                  Or maybe just looking for interesting facts about the park? Please make sure you
                  check out our blog!
                     </i>
                </div>

                <div class="second">
                  <img src="/images/about.png" className="about-img" />
                </div>

              </div>

              <div className="container d-flex text-uppercase" style={{ paddingLeft: 100 }}>
                <div className="btn-about mr-5">Book a tour</div>
                <a className="pt-2" href="google.bg"><b className="text-dark">Our Blog</b></a>

              </div>


            </div>




            {/* <div class="d-flex justify-content-start text-dark">aaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopasaaspdosdspdoaspdoaspodaposdopasdopas</div>
            <div class="d-flex justify-content-end text-dark">...</div> */}


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f8" fill-opacity="1" d="M0,288L80,256C160,224,320,160,480,154.7C640,149,800,203,960,224C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>


          </section>

        </div>
      </div>

    </div >
  )
}
