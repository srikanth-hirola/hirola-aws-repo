import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/json/animation-digital-agency.json';
export default function SvgComponent() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={"90%"}
          width={"90%"}
        />
      </div>
    );
  }

 