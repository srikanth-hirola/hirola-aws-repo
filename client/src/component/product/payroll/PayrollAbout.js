import React from 'react'
import payRollData from '../../../data/products/payrollSoftware.json';
import { Link } from 'react-router-dom';
// import CountUp from 'react-countup/build/CountUp';
const rollData = payRollData
const PayrollAbout = () => {
  return (
    <>
   {
    rollData.map((payData)=>(
      <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1701951150/ab-img_mjfiam.png" loading="lazy" alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <h3 className="title">{payData.about.title}</h3>
                            <p>{payData.about.descriptionOne}</p>
                            <p>{payData.about.descriptionTwo}</p>
                            <Link to="/contact-us" className="axil-btn btn-fill-primary btn-large">Get Started</Link>
                        </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
   }
    </>
  )
}

export default PayrollAbout