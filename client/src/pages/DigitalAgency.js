import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import IndustriesWeServe from '../component/home/IndustriesWeServe';
import OurPatners from '../component/home/OurPatners';
import ServicePropOne from '../component/service/ServicePropOne';
import SectionTitle from '../elements/section-title/SectionTitle';

import CounterUp from '../component/counterup/CounterUp';
import ScrollToTop from '../component/scrollToTop/ScrollToTop';
import BlogDataHome from '../component/blog/BlogDataHome';

import { Helmet } from 'react-helmet-async';
import FilteredDataComponent from './Sample1';
import News from '../component/news/NewsComp';
import ClientScroll from '../elements/ClientScroll';
import TestimonalHome from '../component/testimonial/TestimonalHome';
import WhyUsSection from '../component/home/WhyUsSection';
import HomeCaseStudy from '../component/home/HomeCaseStudy';
import ServicesNew from '../component/home/ServicesNew';
import HomeTextAnimation from '../component/home/HomeTextAnimation';
import AviationHome from '../component/home/AviationHome';
import PopUpFormTwo from '../component/contact/PopUpFormTwo';

// import Reveal from 'react-reveal/Reveal';

// const allData = HomeData;

const DigitalAgency = () => {
    const [visibleModal, setVisibleModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleModalClose = () => {
        setVisibleModal(false);
    };


    return (
        <>
      
         <Helmet>
<title>Hirola Infotech Solutions | Best Digital Marketing Agency Bangalore</title>
<meta name='description' content='Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.'data-rh="true" />

</Helmet>
       
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
           
            <ScrollToTop/>
            <OurPatners/>
            <Modal
                    title="🚨 Caution: Job Scam Alert! 🚨"
                    visible={visibleModal}
                    onOk={handleModalClose}
                    onCancel={handleModalClose}
                    className='cautious-title'
                >
              
                    <p>It has come to our attention that fraudulent job offers, falsely claiming to be from Hirola Infotech Solutions, are in circulation. Please be wary of unsolicited emails or messages asking for personal information or payments.</p>

                    {/* <strong id='scam-tt' >Hirola Infotech Solutions</strong> */}
                </Modal>
            <div className="section section-padding-2 bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="For Rankings, Sales And More"
                        title="Grow Your Client Base With Data-Driven and Targeted Strategies"
                        description="Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location."
                        textAlignment="heading-light-left text-white"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="3" />
                    </div>
                </div>
             
            </div>
         <ServicesNew/>
            
            
           <WhyUsSection/>
           <HomeCaseStudy/>
            {/* <FilteredDataComponent /> */}
<HomeTextAnimation/>
<div className="container ">
<div className="news-section">
<SectionTitle 
                    subtitle="What's Going On Internet"
                    title="Our Latest News"
                    description="News From Hirola Infotech And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
                    textAlignment=""
                    textColor=""
                />
    <News/>
    <AviationHome/>
</div>
</div>

            <div className="section section-padding expert-counterup-area pb--80 pt--80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">About Us</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">Hirola InfoTech Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Hirola InfoTech trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website. We’re not a static company. We don’t limit ourselves to specific industries. Hirola InfoTech has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
                            <p className='pb-3 ab-btn'><PopUpFormTwo/></p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
          <TestimonalHome/>
          <ClientScroll/>
          <IndustriesWeServe/>
          <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Going On"
                    title="Our Latest Blogs"
                    description="News From Hirola Infotech And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
                    textAlignment=""
                    textColor=""
                />
                <div className="row g-0 blog-home  justify-content-between">
                    <BlogDataHome colSize="col-xl-6 col-md-5 col-xl-6 col-xxl-6" itemShow="2" />
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} loading="lazy" alt="bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} loading="lazy" alt="bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-2.png"} loading="lazy" alt="bubble" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} loading="lazy" alt="bubble" /></li>
            </ul>
        </div>
           
<AboutOne />


        <FooterOne parentClass="" />
        <ScrollToTop/>
    
        </main>
        </>
    )
}

export default DigitalAgency;

