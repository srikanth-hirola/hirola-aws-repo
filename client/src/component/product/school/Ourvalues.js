import React from 'react'
import schoolData from '../../../data/products/schoolSoftware.json';
const schData = schoolData
const Ourvalues = () => {
  return (
    <>
{
schData.map((schoolInfo)=>(
  <div className="section section-padding case-study-featured-area bg-color-light text-white school-s">
    <div className="container">
              <h3 className="title text-center">{schoolInfo.aboutUs.title}</h3>
              <p className="subtitle">{schoolInfo.aboutUs.description}</p>
      <div className="row ">
        {
       schoolInfo.ourValues.map((valuesData)=>(
        <>
          <div className="col-md-6 mb-5">
            <div className="about-col">
            <img src={valuesData.image} loading="lazy" alt={valuesData.title} />
            <h4 className="title">{valuesData.title}</h4>
              <p className="subtitle">{valuesData.description}</p>
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

export default Ourvalues