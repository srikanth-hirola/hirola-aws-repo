import React from 'react'
import schoolData from '../../../data/products/schoolSoftware.json';
const schData = schoolData
const OurServices = () => {
  return (
    <>
{
schData.map((schoolInfo)=>(
  <div className="section pt-5 pb-5 case-study-featured-area ">
    <div className="container">
    <h3 className="title text-center">{schoolInfo.ourServices.title}</h3>
    <p className="subtitle">{schoolInfo.ourServices.description}</p>
      <div className="row">
        {
        schoolInfo.ourServices.servicesList.map((serviceList)=>(
          <>
          <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <div className="service-col">
              <p className="subtitle-1">{serviceList.list}</p>
              <p className="subtitle-2">{serviceList.decsription}</p>
            </div>
          </div>
       
          </>
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

export default OurServices