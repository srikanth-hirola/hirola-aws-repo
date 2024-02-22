import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import AviationData from '../../data/aviation.json'
// const sliderItems = AviationData;

const AviationSectionFive = () => {

    const settings = {
  autoplay:true,

    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1,
  };

const sliderItems = [
  {
    id:1,
    title:"Captive Audience ",
    decsription:"In the confined quarters of an aircraft cabin, passengers become a captive audience. With limited options for entertainment during a flight, they are more likely to pay attention to their surroundings. This captive environment provides a unique opportunity for advertisers to engage with a receptive audience. Creative and compelling airline advertisements can leave a lasting impression on passengers' minds, as they actively seek ways to alleviate the occasional monotony of air travel."
  },
  {
    id:2,
    title:"Global Reach ",
    decsription:"Inflight advertising offers an unparalleled reach that transcends geographical boundaries. With thousands of people flying in and around countries every day, inflight advertising in Bangalore, or any other location for that matter, has the potential to reach millions of eyeballs in a relatively short period of time. It provides a global platform for brands to showcase their products and services to a diverse and international audience."
  },
  {
    id:3,
    title:"Multiple Media Options ",
    decsription:"Inflight advertising is a versatile medium that offers a range of platforms to convey a brand's message effectively. Airlines can leverage various channels, including television screens, digital displays, printed materials, and more. This flexibility allows advertisers to tailor their approach to suit their specific campaign goals, audience preferences, and budget constraints."
  },
  {
    id:4,
    title:"Highly Targeted Audience ",
    decsription:"One of the significant advantages of inflight advertising is the ability to target a highly specific audience. Depending on the flight or class of the ticket (economy, business, etc.), advertisers can pinpoint their messaging to match passengers' profiles. This precision allows for tailored marketing campaigns that consider factors such as geographical origin, preferred flight routes, income segments, and more. As a result, the message can resonate more deeply with the intended audience."
  },
]

  return (
    <div className='main-expiry d-none' >
      <section id="av-indu-expiry">
<div className="expiry-sec">
    <div className="container">
       <div className="expiry-text">
       <h6>Advantages of  <span>Advertising Inflight</span></h6>
        <img src="https://intravel.sdemo.site/wp-content/uploads/2016/10/image-header-white.png" loading="lazy" alt="" />
        <p>We love clean design and advanced digital solutions.</p>
       </div>
      
    </div>
</div>
      </section>
      <div className="container">
      <div className="expiry-slider">
       <Slider {...settings}>
        {sliderItems.map(item => (
          <div key={item.id} className="">
         <div className="expiry-slider-data">
            <h6 className="expiry-title">{item.title}</h6>
            <p>{item.decsription}</p>
         </div>
  
          </div>
        ))}
      </Slider>
       </div>
      </div>
    </div>
  )
}

export default AviationSectionFive
