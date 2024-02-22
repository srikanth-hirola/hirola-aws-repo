import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BannerFour from '../component/banner/BannerFour';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFour from '../component/project/ProjectFour';
import TestimonialOne from '../component/testimonial/TestimonialOne';

// import Reveal from 'react-reveal/Reveal';

const HomeStartup = () => {

    return (
        <>
        <SEO title="Home Startup"/>
       
        <main className="main-wrapper">
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <HeaderOne />
        <BannerFour />
        <ProjectFour />
        <TestimonialOne />
        <BrandOne />
        <BlogOne />
        <CtaLayoutOne />
        <FooterOne />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default HomeStartup;

