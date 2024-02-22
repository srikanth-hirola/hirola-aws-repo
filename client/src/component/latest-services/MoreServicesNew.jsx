import React from "react";
import { howItWorks } from "../../data/ServiceCms/ServicesCmsData";
const MoreServicesNew = () => {
  return (
    <>
      <div className="more-services-sec">
        <div className="more-services-sub-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="more-services-sec-one">
                  <div className="more-services-sec-one-text">
                  <h3>{howItWorks.title}</h3>
                  <p>{howItWorks.description}</p>
                  </div>
                  <div className="more-services-sec-one-image">
                    <img src={howItWorks.image} alt="Best Branding Company In Bangalore" />

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="more-services-sec-two">
                 {
                  howItWorks.process.map((data)=>(
                    <div className="more-services-sec-two-sec">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <div className="more-services-sec-two-img">
                          <img src={data.img} alt="Best Branding Company In Bangalore" />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="more-services-sec-two-text">
                          <h4>{data.title}</h4>
                          <p>{data.description}</p>
                        </div>
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
      </div>
    </>
  );
};

export default MoreServicesNew;
