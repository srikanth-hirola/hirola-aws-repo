import React from 'react';
import {Link, useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import { slugify } from '../utils';
import ServiceData from "../data/service/ServiceMain.json";
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress} from 'react-icons/fa';


// our process 
import SectionTitle from '../elements/section-title/SectionTitle';
import Tilty from 'react-tilty';
import SEO from '../common/SEO';
import FormOne from '../component/contact/FormOne';
import FooterCta from '../component/cta/FooterCta';
import { Helmet } from 'react-helmet-async';
// import Reveal from 'react-reveal/Reveal';
const allServiceData = ServiceData;

const ServiceDetails = () => {

    const params = useParams();
    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(data => slugify(data.title) === serviceSlug);
    const detailsService = getServiceData[0];


    return (
        <>
        {/* <SEO title={detailsService.title} /> */}
        <Helmet>
<title>{detailsService.metaTitle}</title>
<meta name='description' content={detailsService.metaDescription} data-rh="true" />
</Helmet>
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h3 className="title h3" >{detailsService.title}</h3>
                    <h3 className='subtitlee'>{detailsService.descriptionSecond}</h3>
                    <p >{detailsService.descriptionThree}</p>
                    <Link to={process.env.PUBLIC_URL + "/contact-us"} className="axil-btn btn-fill-primary btn-large">Get Started With Us</Link>
                </div>
                <div className={`banner-thumbnail `}>
                    <Tilty perspective={2000} reset={false}>
                        <img src={process.env.PUBLIC_URL + detailsService.mainImage } loading="lazy" alt="Illustration" />
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled visually-hidden  ">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} loading="lazy" alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"} loading="lazy" alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" />
                </li>
            </ul>
        </div>
           
          {/* about us section */}
          <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">{detailsService.aboutUs.title}</h3>
                                <p>{detailsService.aboutUs.description}</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                               {
                                detailsService.strategy.map((strategyData)=>(
                                     <Accordion.Item eventKey={strategyData.id}>
                                     <Accordion.Header><FaCompress /> {strategyData.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {strategyData.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))
                               }
                           
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a Quote Now</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>

          {/* about us section */}
           {/* why work with us */}
   <div className="section section-padding bg-color-light pb--40 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title={detailsService.WhyHirolaServices.title}
                    description={detailsService.WhyHirolaServices.description}
                    textAlignment="heading-left heading-light-left mb--100 text-white"
                    textColor=""
                />

                <div className="row">
                    {detailsService.WhyHirolaServices.servicesProvided.map((data) => (
                        <div className="col-lg-6" key={data.id}>
                            <div className="about-quality">
                                {/* <h3 className="sl-number">{data.id}</h3> */}
                                <h5 className="title">{data.title}</h5>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                    
               
                      

                </div>
            </div>
            <ul className="list-unstyled shape-group-10 d-none">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} loading="lazy" alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} loading="lazy" alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} loading="lazy" alt="Circle" /></li>
            </ul>
        </div>
   {/* why work with us */}
          
         {/* our process */}
         <div className="section section-padding pb--70">
            <SectionTitle
                subtitle="Process"
                title={detailsService.designProcess.title}
                description={detailsService.designProcess.description}
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {detailsService.designProcess.designSteps.map((designSteps) => (
                    <div key={designSteps.id} className={`process-work ${(designSteps.id % 2  === 0) ? "content-reverse" : ""}`}>
                        <Tilty perspective={2000}>
                            <div className="thumbnail">
                                <img src={designSteps.image} loading="lazy" alt="Thumbnail" />
                            </div>
                        </Tilty>
                    <div className="content">
                        <span className="subtitle">{designSteps.stepOne}</span>
                        <h3 className="title">{designSteps.stepTwo}</h3>
                        <p>{designSteps.stepThree}</p>
                      
                    </div>
                </div>
                ))}
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} loading="lazy" alt="Line" /></li>
            </ul>
        </div>

    {/* our process */}
     {/* Why our services */}
   {/* <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title={detailsService.ServiceInformation.title}
                    description={detailsService.ServiceInformation.description}
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {detailsService.ServiceInformation.serviceInformationData.map((serviceInformation) => (
                        <div className="col-lg-4" key={serviceInformation.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{serviceInformation.id}</h3>
                                <h4 className="title">{serviceInformation.title}</h4>
                                <p>{serviceInformation.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} loading="lazy" alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} loading="lazy" alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} loading="lazy" alt="Circle" /></li>
            </ul>
        </div> */}
   {/* Why our services */}
   {/* services more info starts here */}
   <div className="section section-padding pb--10 ">
           
           <div className="container">
              <h3 className='text-center' >{detailsService.moreServices.title}</h3>
              <p>{detailsService.moreServices.description}</p>
              <p>{detailsService.moreServices.descriptionTwo}</p>
              <p>{detailsService.moreServices.descriptionThree}</p>
              <h5 className='text-center' >{detailsService.moreServices.titleTwo}</h5>
              <p>{detailsService.moreServices.descriptionFour}</p>
              <div className='row'>
               <div className='col-md-6 mb-2 mt-2 service_data'>
               {
                   detailsService.moreServices.bodyOne.map((data,i)=>(
                       <div className='serviceData' key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                   ))
               }
               </div>
               <div className='col-md-6 service_data'>
               {
                   detailsService.moreServices.bodyTwo.map((data,i)=>(
                       <div key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                   ))
               }
               </div>
              </div>
           </div>
           
       </div>

          {/* services more info ends here */}
   {/* faq ection goes here */}

   <div className="section section-padding-equal faq-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <SectionTitle 
                            title="Frequently asked questions"
                            textAlignment="heading-left"
                            textColor=""
                        />
                    </div>
                    <div className="col-lg-12 col-xl-12">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                                {detailsService.faq.faqData.map((faqData) => (
                                    <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body><p>{faqData.description}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="line" /></li>
                {/* <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/poses-lady.png"} loading="lazy" alt="Poses" /></li> */}
            </ul>
        </div>
   {/* faq section goes here */}
           <FooterCta/>
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default ServiceDetails;