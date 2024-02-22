import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isMorphing, setIsMorphing] = useState(false);

  const texts = [
    'Why',
    'is',
    'this',
    'so',
    'satisfying',
    'to',
    'watch?',
  ];

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsMorphing(true);
      setTimeout(() => {
        setIsMorphing(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 500); // Adjust the duration of the animation as needed
    }, 3000); // Adjust the interval between morphs as needed

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const containerStyle = {
    position: 'absolute',
    margin: 'auto',
    width: '100vw',
    height: '80pt',
    top: '0',
    bottom: '0',
    filter: 'url(#threshold) blur(0.6px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '80pt',
    textAlign: 'center',
    userSelect: 'none',
    transition: 'opacity 0.5s, filter 0.5s',
    opacity: isMorphing ? '0%' : '100%',
    filter: `blur(${isMorphing ? '8px' : '0.6px'})`,
  };

  return (
    <div id="container" style={containerStyle}>
      <span id="text1" style={textStyle}>
        {texts[textIndex % texts.length]}
      </span>
      <span id="text2" style={textStyle}>
        {texts[(textIndex + 1) % texts.length]}
      </span>
    </div>
  );
};

export default MyComponent;
