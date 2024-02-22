import React from "react";
import { Link } from "react-router-dom";
import PopUpForm from "../contact/PopUpForm";
import { servicesTwoData } from "../../data/ServiceCms/ServicesCmsData";
console.log("object",servicesTwoData.title)
const ServiceScroller = () => {
  return (
    <>
      <div className="service-scroller">
        <div className="service-scroller-sub">
          <div className="container">
            <div className="service-scroller-title">
              <h4>{servicesTwoData.title}</h4>
              <h5>{servicesTwoData.description}</h5>
            </div>
            <div className="service-scroller-cards-sec">
              <div className="row">
              {
                servicesTwoData.services.map((serviceData)=>(
                  <div className="col-md-4">
                  <div className="service-scroller-card">
                    <div className="service-scroller-card-image">
                      <img
                        src={serviceData.image}
                        alt="Best Branding Comapny In Bangalore"
                      />
                    </div>
                    <div className="service-scroller-text">
                      <h5>{serviceData.title}</h5>
                      <p>
                        {serviceData.description}
                      </p>
                      {/* <Link to="">Learn More</Link> */}
                      <PopUpForm title={"Reach Out Us"}/>
                    </div>
                  </div>
                </div>
                ))
                
              }
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceScroller;
