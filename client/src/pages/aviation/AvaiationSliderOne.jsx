import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './ThreeCardSlider.scss'; // Create a separate SCSS file for styling

const ThreeCardSlider = () => {
  const settings = {
    autoplay: true,

    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 3 cards at a time
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

  // Dummy data for the slider (replace with your own data)
  const sliderItems = [
    { id: 1, text: "Hirola Infotech Solutions delivered incredible results for our inflight marketing campaign. They truly understand the aviation industry and helped us reach a captive audience. An outstanding partner for any business!    ", name:"Manas Gupta" },
    { id: 2, text: "Working with Hirola Infotech Solutions for our inflight marketing was a game-changer! Their team made the process effortless, and our brand's exposure soared. Highly recommend their services.    " ,name:"Abhishek Nair"},
    { id: 3, text: "Choosing Hirola Infotech Solutions for our inflight marketing needs was a brilliant decision. Their expertise and attention to detail were evident from the start. We saw a significant impact on our brand's visibility and engagement. Thank you for a job well done!    ",name:"Neeraj Patel" }
    // Add more items here
  ];

  return (
    <div className="slider-container pb--90">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8 col-xl-8">
            <Slider {...settings}>
              {sliderItems.map((item) => (
                <div key={item.id} className="slider-item">
                  <div className="client-item">
                    <div className="client-header">
                      <div className="client-quote">
                        <img
                          src="/images/aviation/star.png"
                        />
                      </div>
                      <div className="client-thumb">
                        <img
                          src="https://themeim.com/demo/flynext/assets/images/client/client-3.png"
                          loading="lazy" alt="client"
                        />
                      </div>
                    </div>
                    <div className="client-content">
                      <p>
                       {item.text}
                      </p>
                    </div>
                    <div className="client-footer">
                      <div className="client-footer-left">
                        <h4 className="title">{item.name}</h4>
                        {/* <span className="sub-title">Marketing Manager</span> */}
                      </div>
                      <div className="client-footer-right">
                        <span className="ratings">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star active"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
            <div
              className="client-right-thumb aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="	https://themeim.com/demo/flynext/assets/images/client/client-big.png"
                loading="lazy" alt="client"
              />
              <div className="client-thumb-overlay">
                <div className="video-main">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <a
                    className="video-icon"
                    data-rel="lightcase:myCollection"
                    href="https://www.youtube.com/embed/Hw4ctvV25H0"
                  >
                    <i className="las la-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardSlider;
