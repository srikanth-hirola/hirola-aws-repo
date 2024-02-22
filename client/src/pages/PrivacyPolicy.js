import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import FooterCta from '../component/cta/FooterCta'
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import { Helmet } from 'react-helmet-async';
// import Reveal from 'react-reveal/Reveal';


const PrivacyPolicy = () => {

    return (
        <>
            


<Helmet>
<title>Hirola InfoTech Solutions Privacy Policy - Protecting Your Data and Privacy</title>
<meta name='description' content='At Hirola InfoTech Solutions, we prioritize the protection of your data and privacy. Our privacy policy outlines our commitment to safeguarding the information we collect and ensuring its secure handling. 'data-rh="true" />
</Helmet>
           
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Privacy Policy"
                page="Privacy Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">This Privacy policy was published on September 14th, 2023.</h5>
                                </div>
                                <p><strong>Refund Policy for Hirola Infotech Solutions Pvt</strong></p>
<p>At Hirola Infotech Solutions Pvt, we are committed to providing high-quality digital marketing, software development, and app development services to our clients. We strive to deliver results that meet or exceed our clients' expectations. However, it's important to understand our refund policy before engaging our services.</p>
<p><strong>1. No Refunds After Services Are Commenced</strong></p>
<p>Once services, including digital marketing, software development, and app development, have been commenced and work has started, we do not offer refunds for any fees or charges paid for the services.</p>
<p><strong>2. Commitment to Client Satisfaction</strong></p>
<p>We are dedicated to achieving client satisfaction and success. If you have any concerns or issues regarding the services provided, we encourage you to reach out to our customer support team at customer support <strong>hello@hirolainfotech.com</strong> or <strong>+91 9916113646.</strong> Our team will work diligently to address your concerns and find suitable solutions to any problems you may be experiencing.</p>
<p><strong>3. Modifications to Service Plans</strong></p>
<p>If modifications or adjustments are needed to the initially agreed-upon service plan, we are open to discussing changes to meet your requirements. However, these modifications will be considered on a case-by-case basis and will not necessarily entail a refund.</p>
<p><strong>4. Cancellation of Services</strong></p>
<p>If you wish to cancel services before work has commenced, please contact our customer support team to discuss your request. Any potential refunds for services not yet rendered will be considered based on the specific circumstances.</p>
<p><strong>5. No Refunds for Third-Party Costs</strong></p>
<p>Please note that costs incurred for third-party services, such as software licenses, cloud hosting, domain registration, advertising spend, and other external expenses, are not eligible for refunds.</p>
<p><strong>6. Changes to the Refund Policy</strong></p>
<p>Hirola Infotech Solutions Pvt reserves the right to modify or update this refund policy at any time without prior notice. Any changes will be effective upon posting on our website.</p>
<p>By engaging our services, you acknowledge that you have read, understood, and agreed to the terms of this refund policy.</p>
<p>For questions, concerns, or to initiate a cancellation, please contact our customer support team at <strong> <a href="mailto:hello@hirolainfotech.com">hello@hirolainfotech.com</a> </strong> or <strong><a href="tel:+91 9916113646">+91 9916113646</a>.</strong></p>
<p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <FooterCta/>
            <FooterOne parentClass="" />
           {/* </Reveal> */}
            </main>
        </>
    )
}

export default PrivacyPolicy;