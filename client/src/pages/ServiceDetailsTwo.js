import React from 'react';
import {useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ProjectPropOne from '../component/project/itemProp/ProjectPropOne';
import { slugify } from '../utils';
import ServiceData from "../data/service/ServiceMain.json";
import ProjectData from "../data/project/ProjectData.json";
import ProcessOne from '../component/process/ProcessOne';
import AboutTwo from '../component/about/AboutTwo';
import AboutThree from '../component/about/AboutThree';

import SEO from '../common/SEO';
// import Reveal from 'react-reveal/Reveal';

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const ServiceDetails = () => {

    const params = useParams();
    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(data => slugify(data.title) === serviceSlug);
    const detailsService = getServiceData[0];


    return (
        <>
        <SEO title={detailsService.title} />
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <BcrumbBannerOne 
            title={detailsService.title}
            paragraph ={detailsService.description}
           
            styleClass=""
            mainThumb="/images/banner/banner-thumb-4.png"
            />
            <AboutTwo />
           <h2>{detailsService.new}</h2>
           <p>{detailsService.aboutUs.title}</p>
           <p>{detailsService.aboutUs.description}</p>
           <div>
            {
                detailsService.strategy.map((data)=>(
                    <>
                        <strong>{data.id}</strong>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </>
                ))
            }
            <h3>{detailsService.WhyHirolaServices.title}</h3>
            <p>{detailsService.description}</p>
            {
                detailsService.WhyHirolaServices.servicesProvided.map((data)=>(
                    <>
                        <strong>{data.id}</strong>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </>
                ))
            }
            <h3>{detailsService.designProcess.title}</h3>
            <p>{detailsService.designProcess.description}</p>
            {
                detailsService.designProcess.designSteps.map((data)=>(
                  <>
                  <h1>{data.id}</h1>
                    <h2>{data.stepOne}</h2>
                    <p>{data.stepTwo}</p>
                    <strong>{data.stepThree}</strong>
                  </>
                ))
            }
            <h3>{detailsService.ServiceInformation.title}</h3>
            <p>{detailsService.ServiceInformation.description}</p>
            <p>{detailsService.ServiceInformation.descriptionOne}</p>
            <p>{detailsService.ServiceInformation.descriptionTwo}</p>
            <p>{detailsService.ServiceInformation.descriptionThree}</p>
            <p>{detailsService.ServiceInformation.descriptionFour}</p>
            {
                detailsService.ServiceInformation.serviceInformationData.map((data)=>(
                  <>
                  {/* <h1>{data.id}</h1> */}
                    <h2>{data.id}</h2>
                    <p>{data.title}</p>
                    <strong>{data.description}</strong>
                  </>
                ))
            }
            <h2>{detailsService.faq.title}</h2>
            {
                detailsService.faq.faqData.map((data)=>(
                   <>
                   <h1>{data.id}</h1>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                   </>

                ))
            }
           </div>
           
            <ProcessOne />
         <AboutThree/>
            <div className="section section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Our Project"
                        title="Featured Designs"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="row row-35">
                        {getProjectData.slice(0, 2).map((data) => (
                            <div className="col-md-6" key={data.id}>
                                <ProjectPropOne projectStyle="" portfolio={data}/>
                            </div>
                        ))}
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} loading="lazy" alt="circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} loading="lazy" alt="Line" /></li>
                </ul>
            </div>
        
            <CtaLayoutOne />
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default ServiceDetails;