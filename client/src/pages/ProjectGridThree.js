import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import SEO from '../common/SEO';
// import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import FooterCta from '../component/cta/FooterCta';
import { Helmet } from 'react-helmet-async';
// // import Reveal from 'react-reveal/Reveal';

const ProjectGridThree = () => {

    return (
        <>
      <Helmet>
<title>Hirola Infotech Solutions - Empowering Businesses with Innovative IT Solutions</title>
<meta name='description' content='Hirola Infotech Solutions is a leading provider of innovative IT solutions, delivering cutting-edge software development, web development, and digital marketing services.'data-rh="true" />
</Helmet>
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={0}> */}
            <BcrumbBannerOne 
                title="Our Portfolio"
                paragraph ="Hirola Infotech has established a strong presence in the field of digital marketing services, delivering effective strategies and solutions to businesses across various industries. With their expertise and commitment to staying up-to-date with the latest digital trends, Hirola Infotech has helped numerous clients achieve their marketing goals.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <ProjectOne colSize="col-xl-3 col-lg-4 col-md-6" itemShow="53" columnGap="row-15" parentClass="project-column-4"/>
           <FooterCta/>
            <FooterOne parentClass="" />
            {/* </Reveal> */}
        </main>
        </>
    )
}

export default ProjectGridThree;