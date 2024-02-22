import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import CounterUpOne from '../component/counterup/CounterUpOne';
import AboutData from '../data/about/about.json'
import SectionTitle from '../elements/section-title/SectionTitle';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress } from 'react-icons/fa';
import FormOne from '../component/contact/FormOne';
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import VerticalTimelineElement from 'react-vertical-timeline-component/dist-modules/VerticalTimelineElement';
import 'react-vertical-timeline-component/style.min.css';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import { slugify } from '../utils';
import { Link } from 'react-router-dom';
import AboutSix from '../component/about/AboutSix';
import FooterCta from '../component/cta/FooterCta';
import OurPatners from '../component/home/OurPatners';
import { Helmet } from 'react-helmet-async';
import Fade from 'react-reveal/Fade';
import Mission from '../component/home/Mission';
import ClientScroll from '../elements/ClientScroll';
import Tilty from 'react-tilty';
// import Reveal from 'react-reveal/Reveal';
const allData = AboutData;

const AboutUs = ({title, paragraph, styleClass, mainThumb,description}) => {
    
console.log(allData)

    return (
        <>
       
        {/* <SEO title="About Us | Digital Marketing Agency | Hirola InfoTech Solutions" description="" keywords=""/> */}
        <Helmet>
<title>About Us | Digital Marketing Agency | Hirola InfoTech Solutions</title>
<meta name='description' content='A full service digital marketing, social media agency. We develop effective content strategies for corporate brands under our proven results'data-rh="true" />
</Helmet>
       
           {
            allData.map((aboutUsData)=>(
                <main className="main-wrapper">
                <HeaderOne />
              
                <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: aboutUsData.title}}></h1>
                    <p dangerouslySetInnerHTML={{__html: aboutUsData.description}}></p>
                </div>
                <div className={`banner-thumbnail thumbnail-4 ab-b-image`}>
                    <Tilty perspective={2000} reset={false}>
                        <img src='/images/banner/hirola-icon.png' className='ab-b-image' loading="lazy" alt="Illustration" />
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
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
               <OurPatners/>
            
             
              {/* about us section */}
          <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">{aboutUsData.strategy.title}</h3>
                                <p>{aboutUsData.strategy.description}</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                               {
                                aboutUsData.strategy.strategiesOf.map((strategyData)=>(
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
                            <h3 className="title">Get a Free  Quote</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>

<Mission/>
          {/* about us section */}
                <div className="section section-padding bg-color-light pb--70  pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="WE'RE THE BEST"
                    title={aboutUsData.whyUs.title}
                    description={aboutUsData.whyUs.description}
                    textAlignment="heading-left heading-light-left mb--100 text-white"
                    textColor=""
                />

                <div className="row">
                    {aboutUsData.whyUs.whyOurServices.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality about-quality-2">
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
                <AboutSix />
                <CounterUpOne/>
                <div className="section section-padding bg-color-light  pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title={aboutUsData.WhyChooseHirolaServices.title}
                    description={aboutUsData.WhyChooseHirolaServices.description}
                    textAlignment="heading-left heading-light-left mb--100 text-white"
                    textColor=""
                />

                <div className="row">
                    {aboutUsData.WhyChooseHirolaServices.ourBestServices.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality about-quality-3">
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
                {/* our clients section starts here */}

                <main className="main-wrapper">
                {/* <HeaderOne /> */}
            <ClientScroll/>
                <div className="section brand-wrap-area bg-color-dark bg-light heading-left d-none">
                    <div className="container">
                    <h2 className='text-center' >Our Clients</h2>
                        <div className='row'>
                        {aboutUsData.ourClients.map((data, index) => (
                        <div className="about-client-image col-6" key={index}>
                            <div className="brand-grid">
                                <img src={process.env.PUBLIC_URL + data.imageUrl} loading="lazy" alt="Brand" />
                            </div>
                        </div>
                    ))}
                        </div>
                    </div>
                </div>
           
            </main>
                {/* our clients section ends here */}
               {/* company time line starts here */}


             <section className='section section-padding  heading-left ' >
             <div className="container">
             <h2 className='text-center' >Our Journey</h2>
             </div>
                <div className="container time-line">
                
                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#6366f1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #6366f1)' }}
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Dec 2019</h3>
    <p className='text-dark' >
    An Idea of Generation arises – To establish a company that helps million in growth of their company.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Mar 2020</h3>
    <p>
    Created a Brand Name: Hirola Infotech Solutions and went a step forward. Became Pvt Ltd Company with 5 Employees and 3 Local Projects from Bengaluru.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">October 2020</h3>
    <p>
    Signed a first Project from other state of India – Telangana.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Feb 2021</h3>
    <p>
    Signed a First International Project from Canada and Team Increased to 20+ Members.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">September 2021</h3>
    <p>
    Signed 50th project Worldwide and Partnership with Disney+Hotstar and Taboola.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">March 2022</h3>
    <p>
    Crossed 7Million INR, In spending Ads and Generation more than 60Million revenue for Clients and reached a great milestone.    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">June 2022</h3>
    <p>
    Re-Branded the company and still successfully running in 5 different states Including UAE with more than 50+ Live projects and 40 Staff members.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: 'linear-gradient(90deg, rgba(255,116,37,1) 8%, rgba(0,0,0,1) 83%)    ', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">November 2023</h3>
    <p>
    Proudly expanding our horizons! Since our rebranding in June 2022, we've not only sustained success across 5 states and the UAE but have now planted roots in the vibrant city of London, UK.
    </p>
  </VerticalTimelineElement>
  
 
</VerticalTimeline>
                </div>
             </section>
               {/* company timeline ends here */}
               {/* our best services starts here */}


<div className="section section-padding ">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can  help you with"
                        description=""
                        textAlignment="heading-left"
                        textColor=""
                    />
                    <div className="row">
                    {aboutUsData.ourDigitalServices.servicesOffered.map((data, index) => (
				<div className='col-md-6 col-lg-4 col-xl-3 col-xxl-3' key={index} >
					<div className='services-grid service-style-2'>
						{/* <div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="icon" />
						</div> */}
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			))}                    </div>
                </div>
            </div>
{/* our best services ends here */}
               {/* faq section starts here */}
               <div className="section section-padding-equal  faq-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12     col-xl-12">
                        <SectionTitle 
                            title="Frequently Asked Questions"
                            textAlignment="heading-left"
                            textColor=""
                        />
                    </div>
                    <div className="col-lg-12 col-xl-12">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                                {aboutUsData.faq.map((data) => (
                                    <Accordion.Item eventKey={data.id} key={data.id}>
                                        <Accordion.Header><span>{`${data.id}.`}</span>{data.faqTitle}</Accordion.Header>
                                        <Accordion.Body><p>{data.faqDescription}</p></Accordion.Body>
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
            </ul>
        </div>

               {/* faq section ends here */}
                <FooterCta/>
                <FooterOne parentClass="" />
          {/* </Reveal> */}
            </main>
            ))
           }
        </>
    )
}

export default AboutUs;