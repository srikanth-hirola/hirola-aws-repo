import React from 'react'
import industriesData from '../data/industries/industries.json';
import SectionTitle from '../elements/section-title/SectionTitle';
import HeaderOne from '../common/header/HeaderOne';
import BannerOne from '../component/banner/BannerOne';
import FooterOne from '../common/footer/FooterOne';
import { Link } from 'react-router-dom';
import { slugify } from '../utils';
import SEO from '../common/SEO';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';
const allIndustriesdata = industriesData;
console.log(allIndustriesdata)
const IndustriesWeServe = () => {
    
  return (
    <>
    <SEO title={allIndustriesdata.title} />
    {/* <Reveal effect="fadeInUp" duration={900}> */}
        <HeaderOne/>
   <BannerOne/>
   <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
 
       <div className="container">
       <SectionTitle
           subtitle="Industries We Serve"
           title='title'
           description='description'
           textAlignment="heading-left heading-light-left mb--100"
           textColor=""
       />

       <div className="row">
           {allIndustriesdata.map((data) => (
               <div className="col-lg-4" key={data.id}>
       <Link to={process.env.PUBLIC_URL + `/industries/${slugify(data.title)}`} className="more-btn">
                   <div className="about-quality about-home-quality">
                       <img src={data.image} loading="lazy" alt={data.title} />
                       <h5 className="title">{data.title}</h5>
                       <p>{data.description}</p>
                   </div>
           </Link>
               </div>
           ))}
 

       </div>
   </div>
 
   <ul className="list-unstyled shape-group-10">
       <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} loading="lazy" alt="Circle" /></li>
       <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} loading="lazy" alt="Circle" /></li>
       <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} loading="lazy" alt="Circle" /></li>
   </ul>
</div>
<FooterCta/>
<FooterOne/>

    </>
  )
}

export default IndustriesWeServe