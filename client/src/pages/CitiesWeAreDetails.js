import React from 'react';
import {useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import { slugify } from '../utils';
import CitiesData from '../data/cities/citiesWeAre.json';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress} from 'react-icons/fa';


// our process 
import SectionTitle from '../elements/section-title/SectionTitle';
import Tilty from 'react-tilty';
import { Helmet } from 'react-helmet-async';
import FormOne from '../component/contact/FormOne';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';
const allCitiesData = CitiesData;

const CitiesWeAreDetails = () => {

    const params = useParams();
    const serviceSlug = params.slug;

    const getCitiesData = allCitiesData.filter(data => slugify(data.title) === serviceSlug);
    const detailsService = getCitiesData[0];


    return (
        <>
        


<Helmet>
<title>{detailsService.metaTitle}</title>
<meta name='description' content={detailsService.metaDescription} data-rh="true" />
</Helmet>

       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <BcrumbBannerOne 
            title={detailsService.subtitle}
            paragraph ={detailsService.description}
           
            styleClass=""
            mainThumb="/images/banner/banner-thumb-4.png"/>
           
{/* about us in cities we are located*/}
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
                            <h3 className="title">Get a free Hirola quote now</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* about us in cities wew are located */}
 {/* why work with us */}
 <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Included"
                    title={detailsService.WhyHirolaServices.title}
                    description={detailsService.WhyHirolaServices.description}
                    textAlignment="heading-left heading-light-left mb--100 text-white"
                    textColor=""
                />

                <div className="row">
                    {detailsService.WhyHirolaServices.servicesProvided.map((data) => (
                        <div className="col-lg-4" key={data.id}>
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
         <div className="section section-padding bg-color-light pb--70">
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
          
                    <ul>
           
            </ul>
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
{/* why choose our services in located citeis goes here */}
<div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
            <h3>{detailsService.WhyChooseHirola.title}</h3>
            <p>{detailsService.WhyChooseHirola.descriptionOne}</p>
            <p>{detailsService.WhyChooseHirola.descriptionTwo}</p>
            <p>{detailsService.WhyChooseHirola.descriptionThree}</p>
            {
                detailsService.WhyChooseHirola.whyChooseHirolaData.map((data)=>(
                    <>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    </>
                ))
            }
            </div>
            </div>
{/* why choose our services in located citeis goes here */}
{/* why do comapnies choose our location starts here */}
<div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
            <h3>{detailsService.WhySelectUs.title}</h3>
            <p>{detailsService.WhySelectUs.descriptionOne}</p>
            <p>{detailsService.WhySelectUs.descriptionTwo}</p>
            <p><strong>{detailsService.WhySelectUs.descriptionThree}</strong></p>
            {/* <h3>{detailsService.WhySelectUs.WhySelectUsListTitle}</h3> */}
            <ul>
            {
                detailsService.WhySelectUs.WhySelectUsList.map((data)=>(
                    <>

                    <li>{data.list}</li>
                    </>
                ))
            }
            </ul>
          <h4>{detailsService.WhySelectUs.titleTwo}</h4>
          <p>{detailsService.WhySelectUs.titleDescTwo}</p>
          <ul>
            {
                detailsService.WhySelectUs.titleDescTwoList.map((data)=>(
                    <>

                    <li>{data.list}</li>
                    </>
                ))
            }
            </ul>
            </div>
            </div>
{/* why do comapnies choose our location ends here */}


     {/* Why our services */}
   <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title={detailsService.ServiceInformation.title}
                    description={detailsService.ServiceInformation.description}
                    textAlignment="heading-left heading-light-left mb--100 text-white"
                    textColor=""
                />

                <div className="row">
                    {detailsService.ServiceInformation.serviceInformationData.map((serviceInformation) => (
                        <div className="col-lg-4" key={serviceInformation.id}>
                            <div className="about-quality">
                                {/* <h3 className="sl-number">{serviceInformation.id}</h3> */}
                                <h5 className="title">{serviceInformation.title}</h5>
                                <p>{serviceInformation.description}</p>
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
   {/* Why our services */}
   {/* why services are best in the located citeis goes here */}
<div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20">
            <div className="container">
            <h3>{detailsService.WhySelectUs.OurBestService.title}</h3>
            <p>{detailsService.WhySelectUs.OurBestService.descriptionOne}</p>
            <p>{detailsService.WhySelectUs.OurBestService.descriptionTwo}</p>
            <p>{detailsService.WhySelectUs.OurBestService.descriptionThree}</p>
            <h4>{detailsService.WhySelectUs.OurBestService.ourBestServiceListTitle}</h4>
           <ul>
           {
                detailsService.WhySelectUs.OurBestService.OurBestServiceList.map((data)=>(
                    <>
                    {/* <h4>{data.title}</h4> */}
                  <li>{data.list}</li>
                    </>
                ))
            }
           </ul>
            </div>
            </div>
            <FooterCta/>
{/* why services are best in the located citeis goes here */}
    {/* faq ection goes here */}

    <div className="section section-padding-equal bg-color-light faq-area">
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

                
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default CitiesWeAreDetails;