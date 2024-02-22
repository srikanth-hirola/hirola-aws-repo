import React, { useState, useEffect } from 'react';
// import './Banner.css';
// import bannerData from '../../data/blog/BlogData.json';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


import MySVGComponent from './TextRotation';



const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Welcome to our website!",
    "Check out our latest products!",
    "Subscribe for updates!",
    "Explore our services!"
  ] // Use your data for text
  

  useEffect(() => {
    // Automatically advance the text every 3 seconds
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner" id="pr-banner">
     <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="banner-text-one">
          
            <h6>
            {/* Maximize Your Brand's Visibility with Best PR Agency in Bangalore */}
            Enhance Your Brand's Visibility with the Top PR Agency in Bangalore
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
            </h6>
            <p>Entrust your brand's visibility to our skilled PR professionals in Bangalore. We create strategies that work, ensuring your success</p>
            <div className="circle">
            {/* <img src="/images/press/Circle.png" loading="lazy" alt="" /> */}
           
            <MySVGComponent/>
         
            </div>
        
          </div>
     <div className="banner-cards-sec">
     <div className="banner-text-two">
          <div className="star">
         <img src="/images/press/Star.png" loading="lazy" alt="" />
         </div>
            <div className="row">
              <div className="col-md-4 banner-text-sub-one">
             
              </div>
              <div className="col-md-4 banner-text-sub-two">
              <TrackVisibility >
                                {({isVisible}) => (
                                    <>
                                    <h6 className="number count fs-4">
                                       
                                      
                                       &nbsp;  {isVisible ? <CountUp end={50} duration={3} /> : null}
                                       +
                                   </h6>
                                   <h6>
                                   Total Projects
                                   </h6>
                                    </>
                                )}  
                            </TrackVisibility>
              </div>
              <div className="col-md-4 banner-text-sub-three">
              <TrackVisibility >
                                {({isVisible}) => (
                                    <>
                                    <h6 className="number count fs-4">
                                       
                                      
                                       &nbsp;  {isVisible ? <CountUp end={45} duration={3} /> : null}
                                       +
                                   </h6>
                                   <h6>
                                   Happy Clients
                                   </h6>
                                    </>
                                )}  
                            </TrackVisibility>
              </div>
            </div>
          </div>
     </div>
        </div>
        <div className="col-md-6">
          <div className="banner-sec-two">
          <div className="star-one">
         <img src="/images/press/Star.png" loading="lazy" alt="" />
         
    {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
      <defs>
        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
      </defs>
      <circle cx="200" cy="200" r="200" fill="none"></circle>
      <g>
        <use xlink:href="#circlePath" fill="none"></use>
        <text fill="#f8f8f8">
          <textPath xlink:href="#circlePath" startOffset="10%" style="
    letter-spacing: 1px;
">
            PR Agency in Bangalore 
          </textPath>
        </text>
      </g>
    </svg> */}
 
         </div>
          <h6>Global partners</h6>

            <div className="row">
          <div className="col-md-6">Agency that worked with amazing companies to boost your business to next level.</div>
          <div className="col-md-6">We are officially partner with world's best news channels, reach out to us for more details.</div>

            </div>
          </div>
          <div className="banner-sec-three">
            <img src="/images/press/Arch.png" loading="lazy" alt="banner" />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;
