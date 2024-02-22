import React from 'react';
import {Link, useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
// import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import { slugify } from '../utils';
import ProductData from "../data/products/ProductsMain.json";
// import ProjectData from "../data/project/ProjectData.json";


// our process 
// import ProcesstData from "../data/process/ProcessData.json";
import Tilty from 'react-tilty';
import SEO from '../common/SEO';
import ProductAbout from '../component/product/ProductAbout';
import ProductSectionTwo from '../component/product/ProductSectionTwo';
import ProductSectionThree from '../component/product/ProductSectionThree';
import ProductSectionFour from '../component/product/ProductSectionFour';
import ProductSectionSix from '../component/product/ProductSectionSix';
import ProductSectionFive from '../component/product/ProductSectionFive';
// import Reveal from 'react-reveal/Reveal';
const allProductData = ProductData;
// const getProjectData = ProjectData;
// const getProcesstData = ProcesstData;
const ProductDetails = () => {

    const params = useParams();
    const productSlug = params.slug;

    const getProductData = allProductData.filter(data => slugify(data.title) === productSlug);
    const detailsService = getProductData[0];
// console.log(getProductData.map((data)=>data.features))

    return (
        <>
        <SEO title={detailsService.title} />
       
        <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h3 className="title h3" >{detailsService.title}</h3>
                    <h3 className='subtitlee'>{detailsService.descriptionSecond}</h3>
                    <p >{detailsService.descriptionThree}</p>
                    <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Get Started With Us</Link>
                </div>
                <div className={`banner-thumbnail `}>
                    <Tilty perspective={2000} reset={false}>
                        <img src={process.env.PUBLIC_URL + detailsService.mainImage } loading="lazy" alt="Illustration" />
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
     
        <ProductSectionTwo/>
        <ProductAbout/>
        <ProductSectionThree/>
        <ProductSectionFour/>
        <ProductSectionFive/>
        <ProductSectionSix/>
            <CtaLayoutOne />
           
        <FooterOne parentClass="" />
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default ProductDetails;