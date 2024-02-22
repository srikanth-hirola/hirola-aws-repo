import React from 'react'
import inventoryData from '../../../data/products/inventorySoftware.json'
const inventData  = inventoryData;
const InventoryFeatures = () => {
  return (
    <>
{
  inventData.map((inventoryInfo)=>(
    <div className="section section-padding case-study-featured-area ">
      <div className="container">
        <h3 className="title">{inventoryInfo.features.title}</h3>
        <p className="subtitle">{inventoryInfo.features.desription}</p>
        <div className="row">
          {
            inventoryInfo.features.featuresList.map((inventList)=>(
              <div className="col-md-6">
                <h5 className="title">{inventList.title}</h5>
                <p className="subtitle">{inventList.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  ))
}
    </>
  )
}

export default InventoryFeatures