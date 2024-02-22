import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

// Keyframes for animations
const fadeIn = () => ({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const slideIn = () => ({
  from: {
    transform: 'translateY(10px)',
  },
  to: {
    transform: 'translateY(0)',
  },
});
const slideOut = () => ({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(10px)',
  },
 
});

// Styled components
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 80px 70px;
  &.s--inactive {
    // Add styles for the 's--inactive' class
  }
`;

const Element = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 20%; /* Adjust width as needed */
  height: 80%;
  background: #252525; /* Example background color */
  transition: transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s;
  will-change: transform, width, opacity;
  cursor: pointer;
  &.s--active {
    z-index: 1;
    width: 100%;
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s, width 0.7s 0.1s, z-index 0s;
  }
  &__overflow {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
`;

const Overflow = styled.div`
  /* Add styles for Overflow if needed */
`;

const Inner = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  transition: transform 1s;
  &.s--inactive {
    transform: translate3d(0, 100%, 0);
  }
`;

const Background = styled.div`
  position: relative;
  width: calc(100% - 140px); /* Adjust as needed */
  height: 100%;
  transition: transform 0.6s 0.1s;
  will-change: transform;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -5%;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: center center;
    transition: transform 1s;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const PreviewContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s 1.2s;
  opacity: 0;
  transform: translateY(10px);
  &.s--el-active {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s;
  }
`;

const Heading = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
`;

const Content = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.1s;
  &.s--active {
    z-index: 2;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.5s 1.2s;
  }
`;

const Text = styled.div`
  text-transform: uppercase;
  font-size: 40px;
  color: #fff;
`;

const CloseButton = styled.div`
  z-index: -1;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  opacity: 0;
  pointer-events: none;
  transition: all 0s 1.4s;
  cursor: pointer;
  &.s--active {
    z-index: 5;
    opacity: 1;
    pointer-events: auto;
    transition: all 0s 1.3s;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 8px;
    margin-top: -4px;
    background: #fff;
    opacity: 0;
    transition: opacity 0s;
  }
  &:before {
    transform: rotate(45deg) translateX(100%);
    &.s--active {
      transition: all 0.3s 1.3s cubic-bezier(.72, .09, .32, 1.57);
      transform: rotate(45deg) translateX(0);
    }
  }
  &:after {
    transform: rotate(-45deg) translateX(100%);
    &.s--active {
      transition: all 0.3s 1.45s cubic-bezier(.72, .09, .32, 1.57);
      transform: rotate(-45deg) translateX(0);
    }
  }
`;

const Index = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -80px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  text-align: center;
  font-size: calc(100vw / 5);
  line-height: 0.85;
  font-weight: bold;
  transition: transform 0.5s, opacity 0.3s 0.6s;
  transform: translate3d(0, 1vw, 0);
  &.s--el-hover {
    transform: translate3d(0, 0, 0);
  }
  &.s--el-active {
    transition: transform 0.5s, opacity 0.3s;
    opacity: 0;
  }
`;

const IndexBack = styled.div`
  color: #2f3840;
  opacity: 0;
  transition: opacity 0.25s 0.25s;
  &.s--el-hover {
    transition: opacity 0.25s;
    opacity: 1;
  }
`;

const IndexOverlay = styled.div`
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 100%, 0);
  transition: transform 0.5s 0.1s;
  color: transparent;
  &:before {
    content: attr(data-index);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    transform: translate3d(0, -100%, 0);
    transition: transform 0.5s 0.1s;
  }
  &.s--el-hover {
    transform: translate3d(0, 0, 0);
    &:before {
      transform: translate3d(0, 0, 0);
    }
  }
`;

// Component
function AnimatedSections() {

const $contRef = useRef(null);
const $elsArrRef = useRef([]);
const $closeBtnsArrRef = useRef([]);

const [isInactive, setIsInactive] = useState(true);
const [isAnimationActive, setIsAnimationActive] = useState(false); // Track animation state

useEffect(() => {
  $elsArrRef.current.forEach(($el, index) => {
    $el.style.animation = `fadeIn 0.5s ease ${index * 0.1 + 1}s forwards, slideIn 0.5s ease ${index * 0.1}s forwards`;
  });

  $contRef.current.classList.remove('s--inactive');
  setIsInactive(false);

  $elsArrRef.current.forEach(($el) => {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;
      $contRef.current.classList.add('s--el-active');
      this.classList.add('s--active');
      setIsAnimationActive(true); // Set animation state to active
    });
  });

  $closeBtnsArrRef.current.forEach(($btn) => {
    $btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const activeElement = document.querySelector('.el.s--active');
      if (activeElement) {
        activeElement.classList.remove('s--active');
      }
      $contRef.current.classList.remove('s--el-active');
      setIsAnimationActive(false); // Set animation state to inactive
    });
  });
}, []);

// Function to handle opening/closing animation
const handleAnimationToggle = () => {
  const activeElement = document.querySelector('.el:not(.s--active)');
  if (isAnimationActive) {
    // If animation is active, close it
    const activeElement = document.querySelector('.el.s--active');
    if (activeElement) {
      activeElement.classList.remove('s--active');
    }
    $contRef.current.classList.remove('s--el-active');
  } else {
    // If animation is inactive, open it
    if (activeElement) {
      activeElement.classList.add('s--active');
    }
    $contRef.current.classList.add('s--el-active');
  }
  setIsAnimationActive(!isAnimationActive); // Toggle animation state
};


 

  return (
    <Container ref={$contRef} className={`cont ${isInactive ? 's--inactive' : ''}`}>
    <Element ref={(el) => $elsArrRef.current.push(el)} className={isAnimationActive ? 's--active' : ''}>
      <Overflow>
        <Inner className={isInactive ? 's--inactive' : ''}>
          <Background />
          <button
          onClick={handleAnimationToggle} // Toggle animation when button is clicked
          className={`close-button ${isAnimationActive ? 's--active' : ''}`}
        >
          {isAnimationActive ? 'Close' : 'Open'}
        </button>

          <PreviewContainer>
            <Heading>Section 1</Heading>
          </PreviewContainer>
          <Content>
            <Text>Whatever</Text>
            {/* Remove the CloseButton component */}
          </Content>
        </Inner>
      </Overflow>
      <Index>
        <IndexBack>1</IndexBack>
        <IndexOverlay data-index="1">1</IndexOverlay>
      </Index>
    </Element>
 
    
  </Container>
  );
}

export default AnimatedSections;
