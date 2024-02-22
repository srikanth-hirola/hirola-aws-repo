import React from 'react'
import inventoryData from '../../../data/products/inventorySoftware.json'
const inventData  = inventoryData;
const InventoryTwo = () => {
  return (
    <>
{
  inventData.map((invenoryInfo)=>(
    <div className="section section-padding case-study-featured-area ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={invenoryInfo.inventoryTwo.image} loading="lazy" alt={invenoryInfo.inventoryTwo.title} />
        </div>
        <div className="col-md-6">
          <h3 className="title">{invenoryInfo.inventoryTwo.title}</h3>
          <p className="subtitle">{invenoryInfo.inventoryTwo.description}</p>
        </div>
      </div>
    </div>
    </div>
  ))
}
    </>
  )
}

export default InventoryTwo