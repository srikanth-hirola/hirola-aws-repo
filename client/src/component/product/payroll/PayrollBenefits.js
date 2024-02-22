import React from "react";
import payRollData from "../../../data/products/payrollSoftware.json";
const rollData = payRollData;

const PayrollBenefits = () => {
  return (
    <>
      {rollData.map((payData) => (
        <div className="section section-padding case-study-featured-area ">
         <div className="container">
         <h3 className="title text-center" >{payData.benefits.title}</h3>
          <p>{payData.benefits.description}</p>
          <div className="container">
            <div className="row">
          {
            payData.benefits.benefitsList.map((data)=>(
              <div className="col-md-4">
                <div className="card-list">
                  <h4 className="title">{data.title}</h4>
                  {data.body.map((benefits, i) =>(
                                            <div  key={i} dangerouslySetInnerHTML={{__html: benefits}}></div>
                                            
                                        ))}
                                      
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

export default PayrollBenefits;
