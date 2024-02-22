import React from "react";
import payRollData from "../../../data/products/payrollSoftware.json";
const rollData = payRollData;

const PayrollWork = () => {
  return (
    <>
      {rollData.map((payData) => (
        <div className="section section-padding case-study-featured-area  text-center">
         <div className="container">
         <h3>{payData.howItWorks.title}</h3>
          <p>{payData.howItWorks.description}</p>
          <div className="container">
            <div className="row">
          {
            payData.howItWorks.howItWorksData.map((data)=>(
              <div className="col-md-4">
                <div className="card-list">
                  <h4 className="title">{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            ))
          }
            </div>
          </div>
         </div>
        </div>
      ))}
    </>
  );
};

export default PayrollWork;
