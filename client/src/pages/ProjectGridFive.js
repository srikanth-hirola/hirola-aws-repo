import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';

import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFive from '../component/project/ProjectFive';
// import Reveal from 'react-reveal/Reveal';


const ProjectGridFive = () => {

    return (
        <>
        <SEO title="Project Full Width Four Column" />
       
        <main className="main-wrapper">
            
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <BcrumbBannerOne 
                title="Our Projects"
                paragraph ="A quick view of industry specific problems solved with design by the awesome team at Abstrak.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <ProjectFive colSize ="row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" parentClass="project-column-4" perPageShow="8"/>
            <CtaLayoutOne />
            <FooterOne parentClass="" />
           {/* </Reveal> */}
        </main>
        </>
    )
}

export default ProjectGridFive;