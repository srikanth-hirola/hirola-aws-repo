import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
// import Reveal from 'react-reveal/Reveal';


const ProjectGridOne = () => {

    return (
        <>
        <SEO title="Project Two Column" />
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}            <BcrumbBannerOne 
                title="Our Projects"
                paragraph ="A quick view of industry specific problems solved with design by the awesome team at Abstrak.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <ProjectOne />
            <CtaLayoutOne />
            <FooterOne parentClass="" />
           {/* </Reveal> */}
        </main>
        </>
    )
}

export default ProjectGridOne;