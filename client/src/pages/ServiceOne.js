import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import { Helmet } from 'react-helmet-async';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServiceProp from '../component/service/ServiceProp';
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';

const allData = ServiceData;


const ServiceOne = () => {

    const designData = allData.filter(data => slugify(data.cate ? data.cate : "") === "design");
    const developmentData = allData.filter(data => slugify(data.cate ? data.cate : "") === "development").slice(0,3);
    const marketingData = allData.filter(data => slugify(data.cate ? data.cate : "") === "online-marketing");
    const businessData = allData.filter(data => slugify(data.cate ? data.cate : "") === "business");
    const technologyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "technology");
    const aviationData = allData.filter(data => slugify(data.cate ? data.cate : "") === "aviation");
    const pressData = allData.filter(data => slugify(data.cate ? data.cate : "") === "press");
    const testingData = allData.filter(data => slugify(data.cate ? data.cate : "") === "testing");
    const cloudData = allData.filter(data => slugify(data.cate ? data.cate : "") === "cloud-computing");
    const consultantData = allData.filter(data => slugify(data.cate ? data.cate : "") === "consultant-services");



    return (
        <>
        


<Helmet>
<title>Digital Marketing Services and Internet Marketing Solutions | Hirola</title>
<meta name='description' content='Hirola Digital Marketing is a full-service digital marketing agency and offer online solutions for all your digital channels.Get quote today!'data-rh="true" />
</Helmet>

       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <BcrumbBannerOne 
                title="Best Digital Marketing Services In Bangalore"
                paragraph ="Unlock the power of digital marketing to grow your business and reach a wider audience. Our comprehensive digital marketing services combine cutting-edge strategies, data-driven insights, and creative expertise to maximize your online presence and drive measurable results. From search engine optimization (SEO) to social media management, pay-per-click advertising (PPC), content marketing, and more, we tailor our services to suit your unique business objectives."
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
           {/* </Reveal> */}
            <div className="service-scroll-navigation-area">

                {/* Service Nav */}
                
                <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed sticky-top">
                    <div className="container ">
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#section1">Design</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2">Development</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section3">Marketing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section4">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section5">Technology</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#section6">Aviation & Press Release</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#section7">Press Release</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#section8">Testing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section9">Cloud Computing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section10">Consultancy</a>
                        </li>
                        </ul>
                    </div>
                </nav>

                <div className="section section-padding" id="section1">
                    <div className="container">
                        <SectionTitle 
                            title="Design"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={designData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding " id="section2">
                    <div className="container">
                        <SectionTitle 
                            title="Development"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={developmentData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding" id="section3">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Marketing"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding " id="section4">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Business"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={businessData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding" id="section5">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Technology"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={technologyData}/>
                        </div>
                    </div>
                </div>

              
               

                <div className="section section-padding " id="section7">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Testing"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={testingData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding " id="section8">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Cloud Computing"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={cloudData}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding " id="section9">
                    <div className="container">
                        <SectionTitle 
                           
                            title="Consultant"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={consultantData}/>
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

export default ServiceOne;