import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BlogForm from "../contact/BlogForm";
import PopUpForm from "../contact/PopUpForm";
import BlogFormTwo from "../contact/BlogFormTwo";

const ServiceFeatureThree = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="services-features-three">
        <div className="services-features-sub-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="more-services-title">
                  <div className="more-services-title-sub">
                    <hr />
                    <h5>More Services</h5>
                  </div>
                  <h3>Transforming your digital landscape</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable hkklj content of a page when
                    looking at its layout. Lorem Ipsum It is a long established
                    fact that a reader will be distracted by the readable
                  </p>
                  {/* <Link to="">Read More</Link> */}
                  <PopUpForm title={"Get Started"}/>
                </div>
              </div>
              <div className="col-md-7">
                <BlogFormTwo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatureThree;
