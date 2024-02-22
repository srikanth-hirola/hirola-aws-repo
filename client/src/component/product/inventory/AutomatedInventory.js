import React from "react";
import inventoryData from "../../../data/products/inventorySoftware.json";
const inventData = inventoryData;
const AutomatedInventory = () => {
  return (
    <>
      {inventData.map((inventoryInfo) => (
        <div className="section section-padding case-study-featured-area bg-color-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="automated-sec">
                  <h4 className="title">{inventoryInfo.automated.title}</h4>
                  <p className="subtitle">{inventoryInfo.automated.title}</p>
                  <ul>
                    {
                      inventoryInfo.automated.listData.map((listData)=>(
                        <li className="list-circle" >{listData.info}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src={inventoryInfo.automated.image} loading="lazy" alt={inventoryInfo.automated.image} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AutomatedInventory;
