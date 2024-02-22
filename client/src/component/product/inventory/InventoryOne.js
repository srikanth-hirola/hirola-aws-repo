import React from 'react'
import inventoryData from '../../../data/products/inventorySoftware.json'
const inventData  = inventoryData;
const InventoryOne = () => {
  return (
    <>
{
  inventData.map((invenoryInfo)=>(
    <div className="section section-padding case-study-featured-area ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3 className="title">{invenoryInfo.inventoryOne.title}</h3>
          <p className="subtitle">{invenoryInfo.inventoryOne.description}</p>
        </div>
        <div className="col-md-6 inv-img" >
          <img src={invenoryInfo.inventoryOne.image}  loading="lazy" alt={invenoryInfo.inventoryOne.title} />
        </div>
      </div>
    </div>
    </div>
  ))
}
    </>
  )
}

export default InventoryOne