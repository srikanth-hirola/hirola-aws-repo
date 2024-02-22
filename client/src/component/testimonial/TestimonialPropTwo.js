import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from "react-slick";



const TestimonialItem = ({colSize, itemShow, testimonialData, layoutStyle}) => {
    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleRight /></div>
        );
    }
    
    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleLeft /></div>
        );
    }
    
    var slideSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
       
      };
    return (
        <>
            <Slider {...slideSettings} className="slick-arrow-nav">
                                                  
            {testimonialData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                <div className={`testimonial-grid ${layoutStyle ? layoutStyle : ""}`}>
                    <span className="social-media">{data.fromtext}</span>
                    <p>{data.description}</p>
                    <div className="author-info">
                        <div className="thumb">
                            <img src={process.env.PUBLIC_URL + data.authorimg} loading="lazy" alt={data.authorname} />
                        </div>
                        <div className="content">
                            <span className="name">{data.authorname}</span>
                            <span className="designation">{data.authordesig}</span>
                        </div>
                    </div>
                </div>
                </div>
            ))}

                                                </Slider> 
        </>
    )
}

export default TestimonialItem;