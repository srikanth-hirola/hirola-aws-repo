import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import SEO from '../common/SEO';
// import Reveal from 'react-reveal/Reveal';


const TermsOfUse = () => {

    return (
        <>
            <SEO title="Terms Of Use" />
           
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Terms Of Use"
                page="Terms Of Use"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <p>Terms and Conditions of Service for Hirola Infotech Solutions Pvt</p>
<h3 class='title '>1. Acceptance of Tertrong</h3>
<p>By engaging the services of Hirola Infotech Solutions Pvt, you acknowledge that you have read, understood, and agreed to the following terms and conditions. These terms constitute a legally binding agreement between you (the client) and Hirola Infotech Solutions Pvt.</p>
<h3 class='title '>2. Services Offered</h3>
<p>Hirola Infotech Solutions Pvt offers a range of digital marketing, software development, and app development services. The specific details of the services to be provided, along with associated fees, will be outlined in the service agreement or proposal provided to the client.</p>
<h3 class='title '>3. Service Agreement</h3>
<p>Before commencing any work, a service agreement or proposal will be provided to the client, outlining the scope of work, deliverables, timelines, and associated fees. The client is required to review and accept the service agreement before work can commence.</p>
<h3 class='title '>4. Payment</h3>
<p>Clients are required to make payments as outlined in the service agreement or proposal. Payments are due according to the agreed-upon schedule. Failure to make payments in a timely manner may result in delays in service delivery.</p>
<h3 class='title '>5. Refund Policy</h3>
<p>Please refer to our Refund Policy for information regarding refunds for services rendered. Once services have commenced, no refunds will be provided for fees or charges paid.</p>
<h3 class='title '>6. Client Responsibilities</h3>
<p>Clients are expected to provide all necessary information, materials, and access required for the successful execution of the services. Delays caused by the client's failure to provide these requirements may impact project timelines and deliverables.</p>
<h3 class='title '>7. Intellectual Property</h3>
<p>Any intellectual property created during providing services, including but not limited to website designs, software code, and content, shall remain the property of Hirola Infotech Solutions Pvt until full payment has been received. Upon full payment, ownership and rights to the intellectual property will be transferred to the client as outlined in the service agreement.</p>
<h3 class='title '>8. Confidentiality</h3>
<p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the engagement.</p>
<h3 class='title '>9. Limitation of Liabilitrong</h3>
<p>Hirola Infotech Solutions Pvt shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the services provided.</p>
<h3 class='title '>10. Termination</h3>
<p>Either party may terminate the engagement by providing written notice in accordance with the terms outlined in the service agreement.</p>
<h3 class='title '>11. Amendments</h3>
<p>Hirola Infotech Solutions Pvt reserves the right to update or modify these terms and conditions at any time. Clients will be notified of any changes, and continued engagement after the notification implies acceptance of the updated terms.</p>
<h3 class='title '>12. Governing Law</h3>
<p>These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.</p>
<p>By engaging our services, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined above.</p>
<p>For questions or clarifications regarding these terms, please contact our customer support team at hello@hirolainfotech.com <strong><a href="tel:+91 9916113646">+91 9916113646</a>.</strong></p>
<p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
            <FooterOne parentClass="" />
           {/* </Reveal> */}
            </main>
        </>
    )
}

export default TermsOfUse;