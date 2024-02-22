import React from 'react';
import FormOne from '../contact/FormOne';
import HomeNewsLetter from '../../component/home/HomeNewsLetter'

const AboutOne = () => {
    return (
       <>
         <section className="section section-padding-equal  about-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle " >TO TELL STORIES THAT
INSPIRE TRUST AND AUTHORITY</span>
                                <h3 className="title mb--40">BEST DIGITAL MARKETING SERVICES IN BANGALORE</h3>
                                <p>Hirola InfoTech works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.</p>
                                <p>Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Hirola InfoTech focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI). Our reviews and testimonials speak volumes. We earn your business every day with month-to-month contracts. </p>

    <p>Our digital marketing services include search engine optimization (SEO), social media marketing, content marketing, email marketing, and more. We use a data-driven approach to develop strategies that are focused on driving traffic, generating leads, and increasing conversions. Our team of experts uses the latest tools and technologies to track and analyze the performance of our campaigns, allowing us to make data-driven decisions and optimize our strategies for maximum results.</p>                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} loading="lazy" alt="line" /></li>
            </ul>
        </section>
        <HomeNewsLetter/>
       </>
    )
}

export default AboutOne;