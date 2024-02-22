import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './AviationSlider.scss'; // Create a separate SCSS file for styling

const AviationSlider = () => {
  const settings = {
  autoplay:true,

    infinite: true,
    speed: 350,
    slidesToShow: 4, // Display 3 cards at a time
    slidesToScroll: 1,
  };

  // Dummy data for the slider (replace with your own data)
  const sliderItems = [
    { id: 1, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-3-black-copyright.png' },
    { id: 2, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-2-black-copyright.png' },
    { id: 3, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-1-black-copyright.png' },
    { id: 4, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-6-black-copyright.png' },
    { id: 5, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-5-black-copyright.png' },
    { id: 6, image: 'https://winger.ancorathemes.com/wp-content/uploads/2020/01/partner-4-black-copyright.png' },
    // Add more items here
  ];

  return (
    <div className="slider-container" id='aviation-logo' style={{backgroundImage:`url('/images/aviation/av-client.png')`}} >
     {/* <div className="elementor-background-overlay"></div> */}
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-4">
          <h2 className='cl-title' >  Our Clients</h2>
        </div>
            <div className="col-md-8">
            <Slider {...settings}>
        {sliderItems.map(item => (
          <div key={item.id} className="">
          <img src={item.image} loading="lazy" alt="" className='sl-ig' />
          </div>
        ))}
      </Slider>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default AviationSlider;

