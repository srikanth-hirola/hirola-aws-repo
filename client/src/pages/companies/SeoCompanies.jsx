// import React from 'react';
// import FooterOne from '../../common/footer/FooterOne';
// import HeaderOne from '../../common/header/HeaderOne';
// import BcrumbBannerOne from '../../elements/breadcrumb/BcrumbBannerOne';

// import SEO from '../../common/SEO';
// import SectionTitle from '../../elements/section-title/SectionTitle';
// import ServiceData from "../../data/companies/SeoCompanies.json";
// import { slugify } from '../../utils';
// import FooterCta from '../../component/cta/FooterCta';
// import CompaniesProp from '../../component/companies/CompaniesProp';
// // import Reveal from 'react-reveal/Reveal';

// const allData = ServiceData;


// const SeoCompanies = () => {

//     const designData = allData.filter(data => slugify(data.cate ? data.cate : "") === "companies");




//     return (
//         <>
//         <SEO title="Seo Companies" />
       
//         <main className="main-wrapper">
// +            <HeaderOne />
//             {/* <Reveal effect="fadeInUp" duration={900}> */}
//             <BcrumbBannerOne 
//                 title="Best Digital Marketing Services In Bangalore"
//                 paragraph ="Unlock the power of digital marketing to grow your business and reach a wider audience. Our comprehensive digital marketing services combine cutting-edge strategies, data-driven insights, and creative expertise to maximize your online presence and drive measurable results. From search engine optimization (SEO) to social media management, pay-per-click advertising (PPC), content marketing, and more, we tailor our services to suit your unique business objectives."
//                 styleClass=""
//                 mainThumb="/images/banner/banner-thumb-4.png"
//             />
//             <div className="service-scroll-navigation-area">

//                 {/* Service Nav */}
                
 

//                 <div className="section section-padding" id="section1">
//                     <div className="container">
//                         <SectionTitle 
//                             title="Design"
//                             description=""
//                             textAlignment="heading-left"
//                             textColor=""
                        
//                         />
//                         <div className="row">
//                             <CompaniesProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={designData}/>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//             <FooterCta/>
//             <FooterOne parentClass="" />
//            {/* </Reveal> */}
//         </main>
//         </>
//     )
// }

// export default SeoCompanies;