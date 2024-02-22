import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from './CounterUp';
import PopUpForm from '../contact/PopUpForm';
import PopUpFormTwo from '../contact/PopUpFormTwo';


const CounterUpTwo = () => {
    return (
        <div className="section section-padding expert-counterup-area pt-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">About Us</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">Hirola InfoTech Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Hirola InfoTech trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website. We’re not a static company. We don’t limit ourselves to specific industries. Hirola InfoTech has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
                            {/* <Link to={process.env.PUBLIC_URL + "/contact-us"} className="axil-btn btn-large btn-fill-primary">Careers</Link> */}
                            <PopUpFormTwo />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterUpTwo;