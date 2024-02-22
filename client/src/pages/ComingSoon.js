import React from "react";
import SEO from "../common/SEO";

import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from "react-countdown";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
// import Reveal from 'react-reveal/Reveal';
import Tilty from 'react-tilty';
const ComingSoon = ({styleClass}) => {
  const Completionist = () => <span>Our Site is Ready to Go!</span>;

  const SetCountdownTime = "2024-05-18T19:00:00";

  const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown">
          <div className="countdown-section">
            <span className="countdown-number">{days}</span>
            <span className="countdown-unit">Days</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-unit">Hours</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-unit">Minutes</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-unit">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <SEO title="Coming Soon" />
      <HeaderOne />
      {/* <Reveal effect="fadeInUp" duration={900}> */}
     
      <main className="main-wrapper">
        <div className="coming-soon-area onepage-screen-area">
          <div className="container">
            <div className="row align-items-center justify-content-center pt--150  pb--90">
             
              <div className="col-xl-6 col-lg-8">
                <div className="content">
                  <h2 className="title">Our new service is on its way</h2>
                  <p>
                    Congratulations on the upcoming launch of your new service!
                    Can you please share more details about the type of service
                    you are planning to offer? This will help me provide more
                    targeted advice on how to ensure a successful launch.
                  </p>
                  <Countdown
                    date={SetCountdownTime}
                    zeroPadTime={3}
                    renderer={CountDownRender}
                  ></Countdown>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Notify Me
                      </button>
                    </div>
                  </form>
             
                </div>
              </div>
              <div className="col-xl-6">
                <div className="thumbnail">
                 
                   <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                        <img src={process.env.PUBLIC_URL +' /images/banner/banner-thumb-3.png'} loading="lazy" alt="Illustration" />
                    </Tilty>
                </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"}
                loading="lazy" alt="Bubble"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                loading="lazy" alt="Line"
              />
            </li>
          </ul>
        </div>
        <FooterOne />
      </main>
     {/* </Reveal> */}
    </>
  );
};

export default ComingSoon;
