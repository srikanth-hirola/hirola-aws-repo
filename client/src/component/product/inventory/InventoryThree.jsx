import React from "react";
import inventoryData from "../../../data/products/inventorySoftware.json";
const inventData = inventoryData;
const InventoryThree = () => {
  return (
    
    <>
      {inventData.map((invenoryInfo) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
              {invenoryInfo.faeturedTab.tabList.map((featuredData) => (
            <div className="row">
                <>
                  <div className="col-md-6">
                    <h3 className="title">{featuredData.title}</h3>
                    {featuredData.body.map((data, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: data }}
                      ></div>
                    ))}
                  </div>
                  <div className="col-md-6">
                    <img src={featuredData.image} loading="lazy" alt={featuredData.title} />
                  </div>
                </>
            </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default InventoryThree;
