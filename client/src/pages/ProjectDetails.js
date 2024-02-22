import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerTwo from "../elements/breadcrumb/BcrumbBannerTwo";
import { slugify } from "../utils";
import VideoOne from "../component/video/VideoOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

import SEO from "../common/SEO";
import FooterCta from "../component/cta/FooterCta";
import Tilty from "react-tilty";
import { useApiCalls } from "../Hooks/useApiCalls";
import { Helmet } from "react-helmet-async";
// import Reveal from 'react-reveal/Reveal';

const ProjectDetails = ({ title, paragraph, mainThumb }) => {
  const [loading, setLoading] = useState(false);
  const [portfolios, setportfolio] = useState([]);
  console.log("portfolio", portfolios);
  const [pagefound, setPageFound] = useState("");

  const params = useParams();
  const projectSlug = params.slug;

  const { fetchBunchData } = useApiCalls();

  const getProjectData = portfolios.filter(
    (data) => slugify(data.title) === projectSlug
  );
  const detailsProject = getProjectData[0];
  console.log("detailsproject", detailsProject);

  useEffect(() => {
    let endpoint = "admin/portfolio";
    fetchBunchData(endpoint, setLoading, setportfolio, setPageFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <SEO title={detailsProject?.title}/> */}
      {/* <Helmet>
        <title>{detailsProject?.title}</title>
        <meta
          name="description"
          content="Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth."
          data-rh="true"
        />
      </Helmet> */}

      <main className="main-wrapper">
        <HeaderOne />
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-heading heading-left">
                  <h1 className="title h2">{detailsProject?.title}</h1>
                  <p>{detailsProject?.excerpt}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-thumbnail pm-thumbnail">
                  <Tilty perspective={2000} reset={false}>
                    <img
                      src={process.env.PUBLIC_URL + detailsProject?.thumb.url}
                      className="ab-b-image"
                      loading="lazy"
                      alt="Illustration"
                    />
                  </Tilty>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"}
                loading="lazy"
                alt="Bubble"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-20.png"}
                loading="lazy"
                alt="Bubble"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                loading="lazy"
                alt="Line"
              />
            </li>
          </ul>
        </div>
        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading heading-left mb-0">
                  <span className="subtitle">
                    {detailsProject?.category.map((cat, i) => (
                      <span key={i}>{cat}</span>
                    ))}
                  </span>
                  <h3 className="title">{detailsProject?.title}</h3>
                </div>
                {detailsProject?.body.map((para, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: para }}></p>
                ))}
                <Link to="/contact-us" className="axil-btn btn-fill-primary">
                  Get it Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <VideoOne />
        <FooterCta />
        <FooterOne parentClass="" />
        {/* </Reveal> */}
      </main>
    </>
  );
};

export default ProjectDetails;
