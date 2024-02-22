import React from 'react'
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo';
import FooterCta from '../../component/cta/FooterCta';
import FooterOne from '../../common/footer/FooterOne';
import AboutSchool from '../../component/product/school/AboutSchool';
import OurServices from '../../component/product/school/OurServices';
import Ourvalues from '../../component/product/school/Ourvalues';
import StakeList from '../../component/product/school/StakeList';

// import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet-async';
import schoolData from '../../data/products/schoolSoftware.json';
// import Reveal from 'react-reveal/Reveal';
const schData = schoolData

const SchoolSoftware = () => {
  return (
    <>
     
{
  schData.map((schoolInfo)=>(
<>



  <Helmet>
<title>Advanced School Management System | Simplify Administration</title>
<meta name='description' content='Simplify school administration and streamline operations with an advanced School Management System. Seamlessly manage student records, attendance, grades, timetables, and communication in one centralized platform.'data-rh="true" />
</Helmet>
           
    <main className="main-wrapper">
             <HeaderOne />
             {/* <Reveal effect="fadeInUp" duration={900}> */}
             <BcrumbBannerTwo 
             title={schoolInfo.title}
             paragraph ={schoolInfo.description + schoolInfo.descriptionTwo}
             mainThumb={schoolInfo.mainImage}
             />
         <AboutSchool/>
         <Ourvalues/>
         <OurServices/>
         <StakeList/>
         {/* <div className="faq mt--80 mb--80">
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
      </div> */}
            <FooterCta/>
         <FooterOne parentClass="" />
        {/* </Reveal> */}
         </main>
</>
  ))
}
     </>
  )
}

export default SchoolSoftware