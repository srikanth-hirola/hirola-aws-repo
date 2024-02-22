import React from 'react'
import schoolData from '../../../data/products/schoolSoftware.json';
const schData = schoolData
const aboutSchool = () => {
  return (
    <>
{
schData.map((schoolInfo)=>(
  <div className="section section-padding case-study-featured-area">
    <div className="container">
      <div className="row">
        {
          <>
          <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="about-col">
              <h3 className="title">{schoolInfo.aboutUs.title}</h3>
              <p className="subtitle">{schoolInfo.aboutUs.description}</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img src={schoolInfo.aboutUs.image} loading="lazy" alt="" />
          </div>
          </>
        }
      </div>
    </div>
  </div>
))
}
    </>
  )
}

export default aboutSchool