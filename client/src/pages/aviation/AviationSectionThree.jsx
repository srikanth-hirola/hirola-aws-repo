import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AviationData from '../../data/aviation.json'


const sliderItems = AviationData;
const AviationSectionThree = () => {
    const settings = {
  autoplay:true,

    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <div>
      <div id="aviation-section-four">
        <div className="sub-sec-four">
            <div className="container">
                <div className="sub-four-text">
                {/* <h6>POPULAR DESTINATION</h6> */}
                <p>Plan your perfect Marketing</p>
                </div>
                <div className="sub-four-slider">
                <Slider {...settings}>
        {sliderItems.map(item => (
          <div key={item.id} className="">
          <div className="destination-item iw-effect-1">
  <img
    src={item.image}
    loading="lazy" alt=""
  />
  <div className="content d-none">
    {/* <!-- Content for hover effect --> */}
    <div className="hover-content">
    <div className="content-bottom">
    <h2>{item.textOne}</h2>
      <ul>
        <li className="meta-destination">
          <i className="fa fa-map-marker"></i>
          <a href="https://intravel.sdemo.site/destination/usa/">
            {item.textTwo}
          </a>
        </li>
        {/* <li className="meta-tour">
          <i className="tour-icon"></i> 0 tours
        </li> */}
      </ul>
      <div className="description">
       {item.textThree}
      </div>
      {/* <div className="destination-detail-v2">
        <a className='theme-btn' href="https://intravel.sdemo.site/destination/usa/new-york/">
          Discover <i className="icon ion-arrow-right-c"></i>
        </a>
      </div> */}
    </div>
     
    </div>
    {/* <!-- Rest of the content --> */}
   
  </div>
</div>
  
          </div>
        ))}
      </Slider>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AviationSectionThree
