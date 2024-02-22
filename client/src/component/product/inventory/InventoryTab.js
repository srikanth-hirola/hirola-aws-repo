import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import inventoryData from '../../../data/products/inventorySoftware.json'
import InventoryThree from './InventoryThree';
const inventData  = inventoryData;
const InventoryTab = () => {
  return (
    <>
    <div className="section section-padding case-study-featured-area bg-color-light">
      <div className="container">
{
    inventData.map((inventInfo)=>(
        <Tabs
      defaultActiveKey="Multi-location Fulfillment"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
     {
        inventInfo.faeturedTab.tabList.map((tabData)=>(
            <Tab eventKey={tabData.title} title={tabData.title}>
        <InventoryThree />
      </Tab>
        ))
     }
  
    </Tabs>
    ))
    
}
</div>
    </div>
    </>
  )
}
export default InventoryTab