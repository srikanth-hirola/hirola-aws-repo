import React from "react";
import jwellRollData from "../../../data/products/jewewlerySoftware.json";
const rollData = jwellRollData;
const OurValuedServices = () => {
  return (
    <>
      {rollData.map((jwellData) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
            <h3 className="title text-center">
              {jwellData.ourValuedServices.title}
            </h3>
            <p className="subtitle text-center">
              {jwellData.ourValuedServices.description}
            </p>
            <div className="container">
              <div className="parent row">
                {jwellData.ourValuedServices.ourValedServicesList.map(
                  (jData) => (
                    <div className=" valued-service mt-5 mb-5">
                      <div className="row abcd align-items-center">
                        <div className="col-md-6">
                          <h4 className="title">{jData.title}</h4>
                          <p>{jData.description}</p>
                          <ul>
                            <li className='list-item-cirlce' >{jData.listOne}</li>
                            <li className='list-item-cirlce' >{jData.listTwo}</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <img src={jData.image} loading="lazy" alt={jData.title} />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurValuedServices;
