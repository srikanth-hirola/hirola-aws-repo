import React from 'react'
import HeaderOne from '../../common/header/HeaderOne'
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo'
import FooterCta from '../../component/cta/FooterCta'
import FooterOne from '../../common/footer/FooterOne';
import PayrollAbout from '../../component/product/payroll/PayrollAbout';
import FeaturesPayroll from '../../component/product/payroll/FeaturesPayroll';
import PayrollBenefits from '../../component/product/payroll/PayrollBenefits';
import PayrollWork from '../../component/product/payroll/PayrollWork';
import Reports from '../../component/product/payroll/Reports';
import payRollData from '../../data/products/payrollSoftware.json';
import Accordion from 'react-bootstrap/Accordion';
// import FaqOne from '../../component/faq/FaqOne'

import { Helmet } from 'react-helmet-async';
// import Reveal from 'react-reveal/Reveal';
import Tilty from 'react-tilty';
import EcommerceHeader from '../../common/header/EcommerceHeader';
const rollData = payRollData
const HrAndPayroll = ({title, paragraph, mainThumb}) => {
  return (
    <>
    <Helmet>
<title>Discover the Best HR & Payroll Management System Software | Streamline Your HR Processes</title>
<meta name='description' content='Streamline your HR processes with the best HR & Payroll Management System Software. Simplify payroll management, track employee attendance, manage leave requests, and automate HR tasks effortlessly.'data-rh="true" />
</Helmet>
           
  {
    rollData.map((payData)=>(
      <main className="main-wrapper">
            {/* <HeaderOne /> */}
            <EcommerceHeader/>
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            {/* <BcrumbBannerTwo
            title={payData.banner.title}
            paragraph ={payData.banner.description}
            mainThumb={payData.banner.bannerImg}
            /> */}
            <div className="breadcrum-area breadcrumb-banner single-breadcrumb hr-breaadcrumb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading heading-left">
                            <h1 className="title h2" >{payData.banner.title}</h1>
                            <p >{payData.banner.description}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail product-banner">
                            <Tilty perspective={2000} reset={false}>
                                <img src={process.env.PUBLIC_URL + payData.banner.bannerImg} className='hr-banner' loading="lazy" alt="Illustration" />
                            </Tilty>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} loading="lazy" alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-20.png"}  loading="lazy" alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" />
                </li>
            </ul>
        </div>
        <PayrollAbout/>
    <PayrollWork/>
    <FeaturesPayroll/>
    <PayrollBenefits/>
    <Reports/>
           <FooterCta/>
      <div className="faq mt--80 mb--80">
        <h3 className='title text-center faq-title' >Frequently asked questions</h3>
        <div className="container">
        <div className="row">
            <div className="container">
            <div className="col-lg-12 col-xl-10 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                               {
                                payData.faq.map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                        {faqData.body.map((data, i) =>(
                                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                                            
                                        ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                               }
                            </Accordion>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
    ))
  }
    </>
  )
}

export default HrAndPayroll