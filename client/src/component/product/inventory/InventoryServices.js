import React from 'react'
import inventoryData from '../../../data/products/inventorySoftware.json'
const inventData  = inventoryData;
const InventoryServices = () => {
  return (
    <>
{
  inventData.map((inventoryInfo)=>(
    <div className="section section-padding case-study-featured-area ">
      <div className="container">
        <h3 className="title">{inventoryInfo.services.title}</h3>
        <p className="subtitle">{inventoryInfo.services.description}</p>
        <div className="row align-items-center">
          {
            inventoryInfo.services.servicesList.map((inventList)=>(
              <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4" >
                <div className="service-list">
                <h5 className="title">{inventList.title}</h5>
                <p className="subtitle">{inventList.description}</p>
                </div>
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

export default InventoryServices