import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Magazines = () => {
    const settings = {
  autoplay:true,

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
  const sliderItems = [
    { id: 1, image: "/images/aviation/mag-1.avif" },
    { id: 2, image: "/images/aviation/mag-2.jpg" },
    { id: 3, image: "/images/aviation/mag-3.jpg" },
    { id: 4, image: "/images/aviation/mag-4.png" },
    { id: 5, image: "/images/aviation/mag-2.jpg" },
    { id: 6, image: "/images/aviation/mag-3.jpg" },
   
    // Add more items here
  ];
  return (
    <div>
      <section id="our-magazines">
        <div className="container">
            <div className="magazine">
                <div className="row align-items-center">
                    <div className="col-md-6 col-xl-4 col-lg-4 col-xxl-4">
                    <div className="magazine-text">
                        <h6>Our Featured Magazines</h6>
                        <p>Our experienced team crafts compelling narratives, engages with key media outlets, and orchestrates impactful campaigns to tell your story. From building brand awareness to managing your reputation, we've got you covered.</p>
                        <button className=' axil-btn btn-fill-primary btn-small' >View Our Magazines</button>
                    </div>
                    </div>
                    <div className="col-md-6 col-xl-8 col-lg-8">
                    <Slider {...settings}>
        {sliderItems.map(item => (
          <div key={item.id} className="">
          <div class="">
          <img src={process.env.PUBLIC_URL + item.image } className='mg-image' loading="lazy" alt="" />
               </div>                                 
          </div>
        ))}
      </Slider>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Magazines
