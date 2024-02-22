import React, { useEffect, useState } from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import { Helmet } from 'react-helmet-async';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import VideoTwo from '../component/video/VideoTwo';
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
import TeamOverseas from '../component/team/TeamOverseas';
import PopUpFormTwo from '../component/contact/PopUpFormTwo';
import CounterUp from '../component/counterup/CounterUp';
import { useApiCalls } from '../Hooks/useApiCalls';
// import Reveal from 'react-reveal/Reveal';
const OverseasTeam = () => {

    const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);
  console.log("teammm", team)
  const [pagefound, setPageFound] = useState('');


    const indianTeam = team.filter(data => slugify(data.category ? data.category : "") === "india");
    const dubaiTeam = team.filter(data => slugify(data.category ? data.category : "") === "dubai");
    console.log(indianTeam)
    console.log(dubaiTeam)

    const { fetchBunchData } = useApiCalls();

    useEffect(() => {
        let endpoint = 'admin/team'
        fetchBunchData(endpoint, setLoading, setTeam, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
     


<Helmet>
<title>Meet the Expert Team at Hirola Infotech Solutions - Driving Innovation and Success</title>
<meta name='description' content='At Hirola Infotech Solutions, we have a talented and experienced team of professionals who are passionate about delivering innovative IT solutions. Our team comprises skilled software developers, web developers, designers, and digital marketing experts who work together'data-rh="true" />
</Helmet>
       
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BcrumbBannerOne 
                title="Meet talent &amp; experience"
                paragraph ="Our team members are experienced professionals in various areas of digital marketing, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website development. With their expertise and passion for staying up-to-date with the latest industry trends, our team is equipped to tackle even the most complex digital marketing challenges."
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
              <div className="section section-padding expert-counterup-area pt-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">About Us</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">Hirola InfoTech Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Hirola InfoTech trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website. We’re not a static company. We don’t limit ourselves to specific industries. Hirola InfoTech has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
                            {/* <Link to={process.env.PUBLIC_URL + "/contact-us"} className="axil-btn btn-large btn-fill-primary">Careers</Link> */}
                            <PopUpFormTwo />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <TeamOverseas />
                   {/* <div className="row">
                            <TeamPropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={indianTeam}/>
                        </div>
                   <div className="row">
                            <TeamPropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={dubaiTeam}/>
                        </div> */}
                <VideoTwo />
               <FooterCta/>
                <FooterOne parentClass="" />
               {/* </Reveal> */}
            </main>
        </>
    )
}

export default OverseasTeam;