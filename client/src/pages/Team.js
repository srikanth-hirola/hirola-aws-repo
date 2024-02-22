import React, { useEffect, useState } from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import { Helmet } from 'react-helmet-async';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';

import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
import VideoTwo from '../component/video/VideoTwo';
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
import { useApiCalls } from '../Hooks/useApiCalls';
// import Reveal from 'react-reveal/Reveal';
const Team = () => {

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
                <CounterUpTwo />
                <TeamOne />
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

export default Team;