import React, { useState } from "react";
import Reveal from "react-reveal/Reveal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import FormOne from "../contact/FormOne";
import PopUpForm from "../contact/PopUpForm";
const WhyUsSection = () => {
  // const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div class="simple-step-div">
        <div
          className="pl-limits"
          style={{ backgroundImage: `url('/images/others/lion.jpg')` }}
        >
          PUSH THE LIMITS
        </div>
        <div class="simple-step-wrap">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            class="aos-init aos-animate"
          >
            <h2>What we do in 3 simple step</h2>
            <p class="content">
              We deliver tailored digital solutions that blend creativity and
              innovation for your company's growth. Our team crafts visually
              appealing designs and cutting-edge technologies, aiming to be the
              catalyst for your sustained success. With strategic planning and
              industry insights, we go beyond immediate needs, ensuring your
              brand thrives in the competitive digital landscape. We're not just
              offering solutions; we're shaping strategies that leave a lasting
              impact in the ever-evolving digital world.
            </p>

            <Link
              className="iso-logo axil-btn  btn btn-primary common-btn view-more"
              to="/contact-us"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div class="container relative">
          <div class="one-wrap">
            <div
              class="one-div aos-init aos-animate"
              data-aos="flip-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                src="/images/banner/one.webp"
                class="one"
                loading="lazy"
                alt="We Understand Your Brand - ATop"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              class="aos-init aos-animate"
            >
              <p class="step-title">We understand your brand</p>
              <p class="content width60">
                {" "}
                Your brand is here to serve. We analyze the ins and outs to
                understand and help your brand serve better on digital.{" "}
              </p>
            </div>
            <div class="one-dashed-circle">
              <svg width="100%" height="100%" viewBox="0 0 550 250">
                <path
                  class="numbers numbers-one"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                  stroke-linejoin="round"
                  d="M0 0, Q400 0, 435 250"
                ></path>
                <path
                  class="numbers-dashed"
                  fill="none"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linejoin="round"
                  d="M0 0, Q400 0, 435 250"
                ></path>
              </svg>
            </div>
          </div>
          <div class="two-wrap">
            <div
              class="left aos-init"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <p class="step-title">We define strategy</p>
              <p class="content">
                {" "}
                We give life to bold ideas to craft ROI-led digital strategies
                for brands.{" "}
              </p>
            </div>
            <div
              class="right aos-init"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                src="/images/banner/two.webp"
                class="two"
                loading="lazy"
                alt="We Define Strategy - ATop Digital"
              />
            </div>
            <div class="two-dashed-circle">
              <svg width="100%" height="100%" viewBox="0 0 270 130">
                <path
                  class="numbers numbers-two"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                  stroke-linejoin="round"
                  d="M270 -11, Q160 75, -29 115"
                ></path>
                <path
                  class="numbers-dashed"
                  fill="none"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linejoin="round"
                  d="M270 -11, Q160 75, -29 115"
                ></path>
              </svg>
            </div>
          </div>
          <div class="three-wrap">
            <div
              class="left aos-init"
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                src="/images/banner/three.webp"
                class="one"
                loading="lazy"
                alt="We guide your brand to attain digital Supremacy"
              />
            </div>
            <div
              class="right aos-init"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <p class="step-title">
                We guide your brand to attain digital Supremacy
              </p>
              <p class="content">
                {" "}
                We monitor, we improvise, and we help your brand attain clarity
                amidst digital chaos{" "}
              </p>
            </div>
            <div class="three-dashed-circle">
              <svg width="100%" height="100%" viewBox="0 0 200 145">
                <path
                  class="numbers numbers-three"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                  stroke-linejoin="round"
                  d="M70 0, Q-15 82, 170 130"
                ></path>
                <path
                  class="numbers-dashed"
                  fill="none"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linejoin="round"
                  d="M70 0, Q-15 82, 170 130"
                ></path>
              </svg>
              <span class="message">
                <img
                  src="/images/banner/message.png"
                  loading="lazy"
                  alt="message"
                />
              </span>
            </div>
            <div class="four-dashed-circle">
              <span class="message">
                <img
                  src="/images/banner/message.png"
                  loading="lazy"
                  alt="message"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSection;
