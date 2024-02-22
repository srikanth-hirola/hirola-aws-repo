import React from 'react'
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo';
import FooterCta from '../../component/cta/FooterCta';
import FooterOne from '../../common/footer/FooterOne';
import AutomatedInventory from '../../component/product/inventory/AutomatedInventory';
// import InventoryFeaturedTab from '../../component/product/inventory/InventoryFeaturedTab';
import InventoryFeatures from '../../component/product/inventory/InventoryFeatures';
import InventoryOne from '../../component/product/inventory/InventoryOne';
import InventoryTwo from '../../component/product/inventory/InventoryTwo';
import InventoryServices from '../../component/product/inventory/InventoryServices';

import { Helmet } from 'react-helmet-async';
import inventoryData from '../../data/products/inventorySoftware.json'
import Accordion from 'react-bootstrap/Accordion';
// import Reveal from 'react-reveal/Reveal';
const inventData  = inventoryData;

const InventorySoftware = () => {
  return (
    <>
     


<Helmet>
<title>Optimize Your Inventory Management with a Powerful System | Efficient Inventory Control</title>
<meta name='description' content='Enhance your inventory management process with a powerful and efficient Inventory Management System. Gain real-time visibility into your stock levels, streamline order fulfillment, track inventory movement, and minimize stockouts and overstocks.'data-rh="true" />
</Helmet>
           
{
  inventData.map((inventoryInfo)=>(
    <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
            <BcrumbBannerTwo 
            title={inventoryInfo.title}
            paragraph ={inventoryInfo.description}
            mainThumb={inventoryInfo.mainImage}
            />
            <InventoryFeatures/>
            <InventoryOne/>
            <InventoryServices/>
            <InventoryTwo/>
            {/* <InventoryFeaturedTab/> */}
            <AutomatedInventory/>
        
            <div className="faq ">
        <h3 className='title text-center' >{inventoryInfo.faq.title}</h3>
        <div className="container">
        <div className="row">
            <div className="container">
            <div className="col-lg-12 col-xl-10 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                               {
                                inventoryInfo.faq.faqList.map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                       <p>{faqData.description}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                               }
                            </Accordion>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
           <FooterCta/>
          {/* </Reveal> */}
        <FooterOne parentClass="" />
        </main>
  ))
}
    </>
  )
}

export default InventorySoftware