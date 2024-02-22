import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import { Helmet } from 'react-helmet-async';
import SectionTitle from '../elements/section-title/SectionTitle';
import citiesData from '../data/cities/citiesWeAre.json';
import { slugify } from '../utils';
import { Link } from 'react-router-dom';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';



const CitiesWeAre = () => {

 



    return (
        <>
      


<Helmet>
<title>Hirola Infotech Solutions - Serving Businesses in Major Cities Across the Globe</title>
<meta name='description' content='Hirola Infotech Solutions is a global IT solutions provider, catering to businesses in major cities worldwide. With a strong presence in key cities such as Bangalore, Mumbai,chennai ,kolkata, dubai and pune,hyderabad'data-rh="true" />
</Helmet>
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}            <BcrumbBannerOne 
                title="Best solutions for your business"
                paragraph ="A group of tech-savvy individuals came together to form a company that would revolutionize the world of digital marketing - Hirola InfoTech Solutions. With a mission to provide top-notch services to businesses across India, Hirola InfoTech Solutions set out to establish a strong presence in major cities such as Bangalore, Chennai, Hyderabad, Delhi, Kolkata, Mumbai, and Pune.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <div className="service-scroll-navigation-area">

     

                <div className="section section-padding" id="section1">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Cities We Are"
                            title="Our Branches/ Locations"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                    
                           
                        <div className="row">
                            {citiesData.slice(0,7).map((data, index)=>(
        <>
            <div key={index} className='col-lg-4 col-md-6' >
                       
                        <div className='services-grid service-style-2'>
                        <div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
                            
								<Link to={process.env.PUBLIC_URL + `/${slugify(data.title)}`}>{data.new}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/${slugify(data.title)}`} className="more-btn">Find out more</Link>
						</div>
                        </div>                            
                      

            </div>
        </>
    ))
}
</div>
                       
                    </div>
                </div>

             
              

              

               
               
              
            </div>
           <FooterCta/>
            <FooterOne parentClass="" />
           {/* </Reveal> */}
        </main>
        </>
    )
}

export default CitiesWeAre;