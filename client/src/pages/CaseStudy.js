import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import { Helmet } from 'react-helmet-async';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import CaseStudyProp from '../component/casestudy/CaseStudyProp';
import FooterCta from '../component/cta/FooterCta';


const CaseStudy = () => {

    return (
        <>
        


<Helmet>
<title>Case Studies | Digital Marketing Agency | Hirola InfoTech Solutions</title>
<meta name='description' content='Hirola case studies show that with an integrated digital and inbound marketing strategy, businesses can get a better return on investment.'data-rh="true" />
</Helmet>

       
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Our Case Studies"
                paragraph ="Hirola InfoTech Solutions has a portfolio of case studies that cover a wide range of industries, from healthcare to finance to technology. Each case study showcases the company's ability to create compelling content that is both SEO and conversation optimized, resulting in increased website traffic, leads, and sales for its clients."
                styleClass="thumbnail-3"
                mainThumb="/images/banner/banner-thumb-5.png"
                />
                <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
                    <div className="container">
                        <CaseStudyProp />
                    </div>
                </div>
             <FooterCta/>
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default CaseStudy;