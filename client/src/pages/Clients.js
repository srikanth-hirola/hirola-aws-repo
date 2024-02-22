// import React from 'react';
// import clientsData from '../data/clients/Clients.json'
// import SectionTitle from '../elements/section-title/SectionTitle';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';
// import HeaderOne from '../common/header/HeaderOne';
// import FooterOne from '../common/footer/FooterOne';
// import FooterCta from '../component/cta/FooterCta';
// import BannerThree from '../component/banner/BannerThree';

// import SEO from '../common/SEO';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
// // import Reveal from 'react-reveal/Reveal';
// const ClientsData = clientsData;

// const Clients = () => {
//     return (
//         <>
//         <main className="main-wrapper">
//                 <HeaderOne />
//                 {/* <Reveal effect="fadeInUp" duration={900}> */}
//                 <SEO/>
//                 <BcrumbBannerOne 
//                 title="Our Clients"
//                 paragraph ="Hirola InfoTech Solutions is an Digital Marketing Agency that offers a range of solutions to clients in various industries. Some of their clients may include small and medium-sized businesses, startups, non-profit organizations, and government agencies.
// As a provider of IT services, Hirola InfoTech Solutions may offer services such as web development, software development, mobile app development, cloud computing, cybersecurity, digital marketing, and IT consulting. Their clients may come from diverse industries such as healthcare, finance, education, retail, hospitality, and more."
//                 styleClass="thumbnail-4"
//                 mainThumb="/images/banner/banner-thumb-3.png"
//                 />
               
//          <SectionTitle
//                             subtitle=""
//                             title="Clients We Served"
//                             description=""
//                             textAlignment="heading-left"
//                             textColor=""
                        
//                         />
//             <div className='container'>
//             <div className='row'>
//              {ClientsData.map((data, index) => (
//                <>

//                <div className="col-lg-2 col-6" key={index}>
//                     <div className="brand-grid">
//                         <img src={process.env.PUBLIC_URL + data.imageUrl} loading="lazy" alt="Brand" className='mt-3 mb-3'/>
//                     </div>
//                 </div>
                

//                 </>
//             ))}
//              </div>
//             </div>
//          <FooterCta/>
//          <FooterOne/>
//         {/* </Reveal> */}
//             </main>
//         </>
//     )
// }

// export default Clients;


import React, { useEffect, useState } from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop/ScrollToTop";
import FooterCta from "../component/cta/FooterCta";
import BannerThree from "../component/banner/BannerThree";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import { useApiCalls } from "../Hooks/useApiCalls";


const Clients = ({ itemShow }) => {

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  console.log("news", news)
  const [pagefound, setPageFound] = useState('');

  const { fetchBunchData } = useApiCalls();

  useEffect(() => {
    let endpoint = 'admin/clients'
    fetchBunchData(endpoint, setLoading, setNews, setPageFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <>
     
      <Helmet>
        <title>
        Trusted Clients of the Best Digital Marketing Agency in Bangalore | Hirola Infotech Solutions
        </title>
        <meta
          name="description"
          content="Discover the success stories of businesses that have partnered with the best digital marketing agency in Bangalore"
          data-rh="true"
        />
      </Helmet>
     
      <main className="main-wrapper">
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <HeaderOne />
        <BcrumbBannerOne
          title="Our Valued Clients from Best Digital Marketing Agency in Bangalore"
          paragraph="Explore the impressive array of clients who have entrusted their success to Hirola Infotech Solutions. Discover how our innovative technology solutions have empowered businesses across diverse industries. Join the ranks of satisfied clients who have experienced unparalleled growth and efficiency with our cutting-edge IT services. At Hirola Infotech Solutions, we prioritize client satisfaction and strive to be your trusted partner in driving digital transformation."
          styleClass="thumbnail-4"
          mainThumb="/images/banner/hirola-icon.png"
        />
        <div className="container pt--100 ">
          <h2 className="PressRoom">Our Clients</h2>
          {/* hided three column row */}
          <div className="row d-none">
            {news.slice(0, itemShow).map((data, index) => (
              <>
                <div className="col-md-4  justify-content-center">
                  <a href={data.link} target="_blank">
                    <div className="news-card mb--30">
                      <div class="">
                        <a  href={data.link} target="_blank">
                          <img
                            className="light-version-logo light-version-logo1"
                            src={data.Dimage}
                            loading="lazy"
                            alt="logo"
                          />
                        </a>
                        <div class="card_content">
                          <h3 className="title">{data.title}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
          {/* hided three column row */}

          <div className="clients-sec">
            {news.reverse().map((data, index) => (
              <>
                <div className="clients-im">
                    <div className="clients-card ">
                      <div class="">
                        
                          <img
                            className="light-version-logo light-version-logo1"
                            src={data.Dimage.url}
                            loading="lazy"
                            alt="logo"
                          />
                      
                      </div>
                    </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <ScrollToTop />

        <FooterCta />

        {/* contact form with newwletter section */}

        <FooterOne parentClass="" />
        <ScrollToTop />
        {/* </Reveal> */}
      </main>
    </>
  );
};

export default Clients;
