import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/about/about-2.png"} loading="lazy" alt="Thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Team</span>
                        <h2>Alone we can do so little; together we can do so much.</h2>  
        <p>We are a 360 creative digital marketing agency 
We are a hive of digital marketing activities in Bangalore serving you with overall digital marketing assistance.
We have assisted more than 150+ brands to establish their mark on digital media, Our bees hold vast experience from a ton of social media campaigns, lacs of keyword ranked on the top page of google, loads of motion & static content developed, billions of sessions meetings, and cores of media money spent & and amazing results generated for all – arguably one of the best Digital marketing agency Bangalore.</p>
                        <Link to="/team" className="axil-btn btn-large btn-fill-primary">Our Team</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;