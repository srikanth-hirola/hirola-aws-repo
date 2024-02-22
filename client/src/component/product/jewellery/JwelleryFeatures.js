import React from 'react'
import jwelerySoftware from '../../../data/products/jewewlerySoftware.json'
const jweleryData = jwelerySoftware;
const JwelleryFeatures = () => {
  return (
    <>
  <>
      {jweleryData.map((payData) => (
        <div className="section section-padding case-study-featured-area ">
          <div className="container">
          <h3 className="title text-center">{payData.features.title}</h3>
          <p>{payData.features.description}</p>
          <p>{payData.features.descriptionTwo}</p>
          <p>{payData.features.descriptionTHree}</p>

            <div className="row">
         {
          payData.features.featuresList.map((jData)=>(
            <div className="col-md-6 col-xl-4 col-xxl-4 col-lg-4">
                  <div className="featured-list service-col">
                    <h5 className='title text-center' >{jData.list}</h5>
                  <p className="subtitle">{jData.description}</p>
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

export default JwelleryFeatures