import React from 'react';

function MySVGComponent() {
  return (
    <div
      id="container"
      style={{
        background: '#000',
        width: '175px',
        height: '175px',
        borderRadius: '172px',
      }}
    >
      <div
        id="circle"
        className="blur"
        style={{
          position: 'relative',
          width: '49px',
          padding: '152px',
        //   right: '2px',
          bottom: '156px',
        }}
      >
        <svg
          version="1.1"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
          style={{
            position: 'absolute',
            top: '94px',
            left: '-61px',
            animationName: 'rotate',
            animationDuration: '10s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="200" cy="200" r="200" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text
              fill="#f8f8f8"
              style={{
                fontFamily: 'Helvetica Neue, Arial',
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '0',
                letterSpacing: '5px',
                transformOrigin: 'center',
                animationName: 'rotate',
                animationDuration: '10s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
              }}
            >
              <textPath xlinkHref="#circlePath" startOffset="10%">
                PR Agency in Bangalore
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default MySVGComponent;
