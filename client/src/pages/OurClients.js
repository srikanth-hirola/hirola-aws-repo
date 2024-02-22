import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';

import ClientBrandItem from '../component/brand/ClientBrandItem';
// import Reveal from 'react-reveal/Reveal';

const OurClients = () => {

    return (
        <>
        <SEO title="Our Clients" />
       
            <main className="main-wrapper">
            {/* <Reveal effect="fadeInUp" duration={900}> */}
                <HeaderOne />
                <BcrumbBannerOne 
                title="Our Clients"
                paragraph ="We work closely with our clients in order to deliver the best results"
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
                <div className="section brand-wrap-area bg-color-light">
                    <div className="container">
                        <div className='row clients-row'>
                        <ClientBrandItem/>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
               {/* </Reveal> */}
            </main>
        </>
    )
}

export default OurClients;