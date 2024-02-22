import React from "react";
import { Link } from "react-router-dom";
import { servicesOneData } from "../../data/ServiceCms/ServicesCmsData";
const ServiceFeatureTwo = () => {
  return (
    <>
      <div className="service-new-features-two">
        <div className="service-new-features-two-sec">
          <div className="container">
            <div className="service-new-features-two-title">
              <hr className="line-one" />
              <h3>{servicesOneData.title}</h3>
              <hr className="line-two" />
            </div>
            <div className="service-new-features-two-title-two">
              <h3>{servicesOneData.description}</h3>
            </div>
            <div className="service-new-features-two-cards">
              <div className="row">
                {servicesOneData.serviceData.map((data) => (
                  <div className="col-md-4">
                    <div className="service-new-features-two-card">
                      <h3>{data.number}</h3>
                      <h5>{data.title}</h5>
                      {/* <div className="read-more-wrap">
                      <div>
                        <input
                          type="checkbox"
                          class="read-more-state"
                          id="post-1"
                        />

                        <p class="read-more-wrap">
                          {data.description.slice(0,150)}.{" "}
                          <span class="read-more-target">
                            {data.description.slice(150,...data.description)}
                          </span>
                        </p>

                        <label for="post-1" class="read-more-trigger"></label>
                      </div>
                    </div> */}
                      <div className="read-more-wrap">
                        <div>
                          <input
                            type="checkbox"
                            className="read-more-state"
                            id={`post-${data.number}`} // This For for identifying 
                          />

                          <p className="read-more-wrap">
                            {data.description.slice(0, 150)}.{" "}
                            <span className="read-more-target">
                              {data.description.slice(150)}
                            </span>
                          </p>

                          <label
                            htmlFor={`post-${data.number}`}
                            className="read-more-trigger"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceFeatureTwo;
