import React from 'react'
import { Link } from 'react-router-dom'
import PopUpForm from '../contact/PopUpForm'
import { digitalExperience } from '../../data/ServiceCms/ServicesCmsData'
const ServiceFeatureFour = () => {
  return (
    <>
      <div className="service-four-features">
        <div className="service-four-features-sub">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
              <div className="service-four-features-images">
                <div className="service-four-features-image-one">
                  <img src={digitalExperience.imageTwo} alt="Best Branding Company In Bangalore" />
                </div>
                <div className="service-four-features-image-two">
                  <img src={digitalExperience.imageOne} alt="Best Branding Company In Bangalore" />
                </div>
                <div className="service-four-features-image-three">
                  <img src={digitalExperience.imageThree} alt="Best Branding Company In Bangalore" />
                </div>
              </div>
              </div>
              <div className="col-md-4">
            <div className="service-four-features-text">
              <h4>{digitalExperience.title}</h4>
<p>{digitalExperience.description}</p>
{/* <Link>Get Started</Link> */}
<PopUpForm title={digitalExperience.buttonText}/>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceFeatureFour