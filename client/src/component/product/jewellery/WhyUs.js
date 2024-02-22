import React from 'react'
import jwelerySoftware from '../../../data/products/jewewlerySoftware.json'
const jweleryData = jwelerySoftware;
const WhyUs = () => {
  return (
    <>
  <>
      {jweleryData.map((payData) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
          <h3 className="title">{payData.whyChooseUs.title}</h3>
          <p>{payData.whyChooseUs.description}</p>
          <p>{payData.whyChooseUs.descriptionTwo}</p>
          <p>{payData.whyChooseUs.descriptionTHree}</p>

            <div className="row">
         {
          payData.whyChooseUs.whyChooseUsList.map((jData)=>(
            <div className="col-md-6">
                  <div className="featured-list">
                    <h5>{jData.title}</h5>
                    <p>{jData.description}</p>
                  </div>
                </div>
          ))
         }
            </div>
          </div>
        </div>
      ))}
    </>
    </>
  )
}

export default WhyUs