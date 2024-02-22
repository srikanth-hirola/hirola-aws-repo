import React from 'react';
import {Link, useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import { slugify } from '../utils';
import industriesDtata from "../data/industries/industries.json";




// our process 
import Tilty from 'react-tilty';
import { Helmet } from 'react-helmet-async';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';
const allindustriesDtata = industriesDtata;

const ProductDetails = () => {

    const params = useParams();
    const productSlug = params.slug;

    const getindustriesDtata = allindustriesDtata.filter(data => slugify(data.title) === productSlug);
    const detailsService = getindustriesDtata[0];


    return (
        <>
       <Helmet>
<title>{detailsService.metaTitle}</title>
<meta name='description' content={detailsService.metaDescription} data-rh="true" />
</Helmet>
       
        <main className="main-wrapper">
        {/* <Reveal effect="fadeInUp" duration={900}> */}
            <HeaderOne />
            <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h3 className="title h3" >{detailsService.title}</h3>
                    <p className='subtitle text-start text-desc ' >{detailsService.description}</p>
                   
                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Get Started With Us</Link>
                </div>
                <div className={`banner-thumbnail industry-banner `}>
                    <Tilty perspective={2000} reset={false}  >
                    <div className="indu-baner">
                    <img src={process.env.PUBLIC_URL + detailsService.BannerImg } loading="lazy" alt="Illustration" />
                    </div>
                       
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled visually-hidden  ">
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
        <section className="pb--80 pt--80">
        <div className="container">
    <div className="row">
    <div className="col-md-6">
        <div className="product-inf">
        <h3>{detailsService.titleTwo}</h3>
        <p>{detailsService.descriptionOne}</p>
        {
                        detailsService.body.map((data,i)=>(
                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                        ))
                    }
       
        </div>
      </div>
    <div className="col-md-6 industry-image">
       
        {
                        detailsService.bodyTwo.map((data,i)=>(
                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                        ))
                    }
      </div>

    </div>
        </div>
      </section>

        <FooterCta/>
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default ProductDetails;