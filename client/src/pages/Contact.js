import React from 'react';
import { Helmet } from 'react-helmet-async';

import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import FormTwo from '../component/contact/FormTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ContactLocation from '../component/contact/ContactLocation';
// import Reveal from 'react-reveal/Reveal';



const Contact = () => {
    return (
        <>
           


<Helmet>
<title>Contact Us | Best Digital Marketing Agency in Bangalore | Hirola</title>
<meta name='description' content='Enquire Now ; Contact Us. +91 9916113646 ; Email Us: hello@hirolainfotech.com ; Locate In: Century Corbel , Sahakar Nagar, Bengaluru-97'data-rh="true" />
</Helmet>

           
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Contact"
                page="Contact"
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a Free Quote</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--30 mb_md--30 mt_md--0 mt--0">
                                <h4 className="title">Phone</h4>
                                <p>Our customer care is Avaialable for  24/7</p>
                                <h4 className="phone-number"><a href="tel:+91 9916113646">+91 9916113646</a></h4>
                                <h4 className="phone-number"><a href="tel:+91 7483071385">+91 7483071385</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Email</h4>
                                <p>Our support team will get back to you Within  3-4 hours during standard business hours.</p>
                                <h4 className="phone-number"><a href="mailto:hello@hirolainfotech.com">hello@hirolainfotech.com</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Carrers</h4>
                                <p>Our Carrers Supportsupport team will get back to you in 12-24 hours during standard business hours.</p>
                                <h4 className="phone-number"><a href="mailto:hrm@hirolaits.com">hrm@hirolaits.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} loading="lazy" alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} loading="lazy" alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} loading="lazy" alt="Circle" /></li>
                </ul>
            </div>

            <div className="section section-padding bg-color-light overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle="Find Us"
                        title="Our office"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} loading="lazy" alt="line" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} loading="lazy" alt="line" /></li>
                </ul>
            </div>

            <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
           {/* </Reveal> */}
            </main>
        </>
    )
}

export default Contact;