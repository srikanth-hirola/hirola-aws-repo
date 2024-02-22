import React from 'react'
import { Link } from 'react-router-dom'
import PopUpForm from '../contact/PopUpForm'
import { elevataBrand } from '../../data/ServiceCms/ServicesCmsData'

const ElevateBrand = () => {
  return (
    <>
        <div className="elevate-brand">
                <div className="container">
            <div className="elevate-brand-sub">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="elevate-brand-sec-one">
                                <div className="elevate-brand-one-sec-circle"></div>
                                <div className="elevate-brand-two-sec-circle"></div>
                                <div className="elevate-brand-sec-text">
                                    <h3>{elevataBrand.title}</h3>
                                </div>
                                <div className="elevate-brand-three-sec-circle"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="elevate-brand-one-sec-text">
                                <h4>{elevataBrand.description}</h4>
                                {/* <Link to=''>Get Started</Link> */}
                                <PopUpForm title={elevataBrand.buttonText}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ElevateBrand