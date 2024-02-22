import React from "react";
import payRollData from "../../../data/products/payrollSoftware.json";
const rollData = payRollData;
const Reports = () => {
  return (
    <>
      {rollData.map((payData) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
          <h3 className="title text-center">{payData.reportsGenerated.title}</h3>
          <p>{payData.reportsGenerated.description}</p>
            <div className="row mt-5">
            {
              payData.reportsGenerated.reportList.map((data)=>(
                <div className="col-md-6 ">
                  <div className="featured-list">
                  {/* <p>{data.id}</p> */}
                    <p className="subtitle " >{data.list}</p>
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

export default Reports;
