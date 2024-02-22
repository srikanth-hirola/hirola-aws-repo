import React from 'react'

const AboutAvaiation = () => {
  return (
    <div>
      <section class="we-fly mb--100 mt--100">
            <div class="we-fly-bg-box">
                <div class="we-fly__bg" style={{backgroundImage:`url('https://jetly-html.vercel.app/main-html/assets/images/backgrounds/we-fly-bg.jpg')`}}></div>
                {/* <div class="we-fly__bg" style={{backgroundImage:`ur(https://jetly-html.vercel.app/main-html/assets/images/backgrounds/we-fly-bg.jpg)`}}></div> */}
            </div>
            <div class="container">
                <img src="https://jetly-html.vercel.app/main-html/assets/images/shapes/we-fly-badge.png" loading="lazy" alt="" class="we-fly__badge"/>
                <div class="row">
                    <div class="col-xl-7 col-lg-8">
                        <div class="we-fly__left">
                            <h3 class="we-fly__title count-box counted">We fly with you to over <span class="count-text we-fly__count" data-stop="6800" data-speed="1500">6800</span>
                                destinations world wide</h3>
                            <p class="we-fly__text">Curly Airline proudly raises the bar and exceeds the standard for
                                luxury and <br/> corporate private jet charter services.</p>
                            <div class="we-fly__btn-boxes">
                                <div class="we-fly__btn-one-box">
                                    <a href="contact.html" class="thm-btn we-fly__btn-one">Book Now</a>
                                </div>
                                <div class="we-fly__btn-two-box">
                                    <a href="about.html" class="thm-btn we-fly__btn-two">Read More</a>
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

export default AboutAvaiation
