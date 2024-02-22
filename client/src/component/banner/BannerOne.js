import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import SVGComponent from "../svg/SvgComponent";

const BannerOne = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const [textIndex, setTextIndex] = useState(0);
  const [isMorphing, setIsMorphing] = useState(false);

  const texts = [
    "Digital Marketing",
    "Web Development",
    "Corporate Branding",
    "Inflight Advertising",
    "Software Development",
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

  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6 or-1">
            <div className="banner-content">
              {values.map((v, idx) => (
                <Button
                  key={idx}
                  className="me-2 mb-2 bg-transparent border-0 text-black -xl h3 p-0 "
                  style={{ visibility: "hidden" }}
                  onClick={() => handleShow(v)}
                >
                  <img
                    src="/images/banner/icons8-play-button-circled-96.png"
                    loading="lazy"
                    alt="circle"
                  />
                  Play
                  {typeof v === "string" && `below ${v.split("-")[0]}`}
                </Button>
              ))}
              <Modal
                className="bg-color-dark"
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/C18BuBr7A6g?autoplay=1"
                    title="Digital Marketing Services To Grow Your Business | SEO | PPC | Hirola Infotech Solutions Pvt Ltd"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Modal.Body>
              </Modal>
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h1 className="title">
                  We Expertise in <br />
                  <div class="wrapper d-none">
                    {/* <div class="static-txt">I'm a</div> */}
                    <ul class="dynamic-txts">
                      <li>
                        <span>SomeThing Amazing</span>
                      </li>
                      <li>
                        <span>Designer</span>
                      </li>
                      <li>
                        <span>Developer</span>
                      </li>
                      <li>
                        <span>Freelancer</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div id="container" style={containerStyle}> */}
                  <span id="text1">{texts[textIndex % texts.length]}</span>
                  {/* <span id="text2" >
        {texts[(textIndex + 1) % texts.length]}
      </span> */}
                  {/* </div> */}
                </h1>
                <span className="subtitle">
                  Join the digital revolution today and grow your business with
                  Hirola InfoTech Solutions - the best digital marketing agency
                  in Bangalore. Let our talented team of experts take care of
                  your SEO, SMO, web design, and PPC needs and many .
                </span>
                <Link
                  to={process.env.PUBLIC_URL + "/contact-us"}
                  className="axil-btn btn-fill-primary btn-large"
                >
                  Get Started{" "}
                </Link>{" "}
                <span className="sp-btn">Digital Marketing Agency</span>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6 or-2">
            <div className="banner-thumbnail">
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <SVGComponent />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1"></li>
        <li className="shape shape-2"></li>

        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            loading="lazy"
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            loading="lazy"
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"}
            loading="lazy"
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            loading="lazy"
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerOne;
