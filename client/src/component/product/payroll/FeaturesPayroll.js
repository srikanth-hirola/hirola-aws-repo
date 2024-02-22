import React from "react";
import payRollData from "../../../data/products/payrollSoftware.json";
const rollData = payRollData;
const FeaturesPayroll = () => {
  return (
    <>
      {rollData.map((payData) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
          <h3 className="title text-center">{payData.features.title}</h3>
          <p>{payData.features.descriptionOne}</p>
          <p>{payData.features.descriptionTwo}</p>
            <div className="row">
            {
              payData.features.featuresLIst.map((data)=>(
                <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="featured-list service-col">
                    <h5 className="title text-center" >{data.feature}</h5>
                  <p>{data.description}</p>
                    </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesPayroll;
