import React from "react";
import { Link } from "react-router-dom";
import { otherCompanies } from "../../data/ServiceCms/ServicesCmsData";
const CtaNewOne = () => {
  return (
    <>
      <div className="service-cta-two">
        <div className="container">
          <div className="service-cta-two-sub">
            <h4 className="">{otherCompanies.title}</h4>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="service-cta-two-text">
                  <ul>
                   {
                    otherCompanies.links.map((linkData)=>(
                      <li className="brand-list">
                      <Link to={linkData.link}>{linkData.title}</Link>
                    </li>
                    ))
                   }
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div class="service-cta-two-images">
                {
                  otherCompanies.images.map((imagsData)=>(
                    <div class="service-cta-two-imageone">
                    <img
                      src={imagsData.image}
                      alt={imagsData.altText}
                    />
                  </div>
                  ))
                }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaNewOne;
