import React from 'react'
import HeaderOne from '../../common/header/HeaderOne'
import FooterOne from '../../common/footer/FooterOne'
import BannerAviation from './BannerAviation'
import ThreeCardSlider from './AvaiationSliderOne'
import AboutAvaiation from './AboutAvaiation'
import AvaiationSectionTwo from './AvaiationSectionTwo'
import AviationSlider from './AviavtionLogo'
import AviationSectionThree from './AviationSectionThree'
import AviationSectionFive from './AviationSectionFive'
import AviationSteps from './Steps'
import AviationSix from './AviationSix'
import AvaitionTypes from './AvaitionTypes'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Aviaton = () => {
  return (
    <div>
    <Helmet>
<title>Hirola InfoTech Solutions - Leading Inflight Magazine Advertising Company in Bangalore</title>
<meta name='description' content='Elevate your brand with our inflight magazine advertising solutions. Trust Hirola InfoTech Solutions, the top airline branding and advertising organization in Bangalore.'data-rh="true" />
</Helmet>
      <HeaderOne/>
<>
    


<div className="av-banner " style={{width: "1519px",opacity: 1,transform: "translate3d(0px, 0px, 0px),"}} >
    <div className="image-layer-three" style={{backgroundImage:`url('https://jetly-html.vercel.app/main-html/assets/images/backgrounds/cloud-1.png')`}}></div>

    
   
    <div className="container">
        <div className="row">
            <div className="col-xl-6">
                <div className="main-slider-three__content">
                    <p className="main-slider-three__sub-title">Inflight Advertising</p>
                    <h2 className="main-slider-three__title">Airline Advertising   <br/> Agency in Bangalore</h2>
                    <div className="main-slider-three__btn-box">
                        <a href="contact.html" className="axil-btn btn-fill-primary btn-medium mx-0">Enquire Now</a>
                        <Link to='/contact-us' className='axil-btn btn-fill-primary btn-medium mx-3'>Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
            <div className="main-slider-three__img">
        <img src="https://jetly-html.vercel.app/main-html/assets/images/resources/main-slider-three-img-1.png" loading="lazy" alt="" className="float-bob-y animate-image"/>
    </div>
            </div>
        </div>
    </div>



</div>
</>

<BannerAviation/>
<AviationSectionFive/>
{/* <AboutAvaiation/> */}
<AvaitionTypes/>
<AvaiationSectionTwo/>
<AviationSectionThree/>
<AviationSlider/>
<AviationSix/>
<ThreeCardSlider/>
      <FooterOne/>
    </div>
  )
}

export default Aviaton
