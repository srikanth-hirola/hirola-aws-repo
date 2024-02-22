import React, { useState, useEffect } from 'react';
// import './Banner.css'; // Create a CSS file for styling
import bannerData from '../../data/blog/BlogData.json'
// const texts = bannerData;
const MainBanner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Welcome to our website!', 'Check out our latest products!', 'Subscribe for updates!'];

  useEffect(() => {
    // Automatically advance the text every 3 seconds
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner" id="pr-banner">
    <div className="color-bg">
        
    </div>
      <div className="background"></div>
      <div className="text-container">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`banner-text ${index === textIndex ? 'active' : ''}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
