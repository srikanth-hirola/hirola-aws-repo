import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image3.jpg",
  "image3.jpg",
  "image3.jpg",
  "image3.jpg",
  "image3.jpg",
  "image8.jpg",
]; // Add your image paths here
const PrSectionOne = () => {
    const [imageIndex, setImageIndex] = useState(0);

useEffect(() => {
  const marqueeContent = document.getElementById("marquee-content");

  const handleAnimationIteration = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % (images.length - 1));
  };

  marqueeContent.addEventListener("animationiteration", handleAnimationIteration);

  return () => {
    marqueeContent.removeEventListener("animationiteration", handleAnimationIteration);
  };
}, []);
  return (
    <div>
      <section id="pr-about">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <div className="pr-about-text">
                        <h6>World-class teams are upgrading to Welcome</h6>
                        <p>Companies are ditching legacy platforms for the ability to deliver an engaging experience at every level.</p>
                    </div>
                    <div className="pr-about-count">
                        <h6> <TrackVisibility >
                                {({isVisible}) => (
                                    <h6 className="number count fs-2">
                                        {isVisible ? <CountUp end={97} duration={3} /> : null}
                                        %
                                        &nbsp;
                                        Successfull  Publishes 
                                    </h6>
                                )}  
                            </TrackVisibility></h6>
                       
                        <p>
                        <TrackVisibility >
                                {({isVisible}) => (
                                    <h6 className="number count fs-4">
                                       
                                      
                                       Avarage Successfull Publishes   &nbsp;  {isVisible ? <CountUp end={99} duration={3} /> : null}
                                        %
                                    </h6>
                                )}  
                            </TrackVisibility>
                       
                        
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="marquee-container">
      <div className="marquee-content" id="marquee-content">
      <div class="gallery">
  <div class="block-33 display--inline-top">
        <div class="gutter relative">
            <div class="gallery-h">
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/indian-express.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/lokmat-times.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/khallej-times.jpg' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/silicon-india.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/times-now.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/zee-biz.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/pti.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/out-look-india.jpeg' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/news18.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/midday.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div class="block-33 display--inline-top">
        <div class="gutter relative">
            <div class="gallery-h gallery-h--tb">
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/livemint-logo.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/ndtv.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/india-today.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/fortune_India.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/dna.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/abp.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/ani.jpg' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/zee-5.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/hisduatan-times.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/deccan-herald.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div class="block-33 display--inline-top">
        <div class="gutter relative">
            <div class="gallery-h">
                <div class="gallery-image relative">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/deccan-chronicle.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/entreprenur.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/the-week.jpg' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/the-print.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/the-hindu.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/The_Economic_Times_logo.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/zee-news.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/forbes.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/times-of-india.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
                <div class="gallery-image">
                    <div class="gallery-image__img relative">
                        <div class="fill-dimensions cover-img" >
                          <img src='/images/press/filmybeat.png' loading="lazy" alt='clients'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</div>
      </div>
    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PrSectionOne
