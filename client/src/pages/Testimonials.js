import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import { Helmet } from 'react-helmet-async';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import SectionTitle from '../elements/section-title/SectionTitle';
import TestimonialPropTwo from '../component/testimonial/TestimonialPropTwo';
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';
const allData = TestimonialData;

const Testimonials = () => {

    const googleData = allData.filter(data => slugify(data.fromtext) === "google");



    return (
        <>
       


<Helmet>
<title>Hirola Infotech Testimonials - Client Experiences with Exceptional IT Solutions</title>
<meta name='description' content='Read testimonials from satisfied clients who have experienced exceptional IT solutions with Hirola Infotech. Our clients share their experiences and insights about our top-notch software development, web development, and digital marketing services.'data-rh="true" />
</Helmet>
       
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Customer Reviews"
                page="Reviews"
                />
                
               <div className="section section-padding customer-review-area d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <SectionTitle 
                                subtitle=""
                                title="What Our Client's Say's"
                                description="At Hirola InfoTech Solutions, we pride ourselves on delivering exceptional digital marketing services that help businesses thrive in the online world. Don't just take our word for it—here are some testimonials from our satisfied clients who have experienced great results through our services."
                                textAlignment="heading-left"
                                textColor=""
                            />
                            </div>
                            <div className="col-lg-4">
                                <div className="review-site-logo">
                                    <a href="https://www.google.com/"><img src={process.env.PUBLIC_URL + "/images/icon/google.png"} loading="lazy" alt="Google" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <TestimonialPropTwo colSize="col-lg-4" itemShow="3" testimonialData={googleData} />

                        </div>
                    </div>
                </div>

                <div id="sectioj-rev" className=" mt--100" >
        <div className="container mb--40">
        <SectionTitle 
                    subtitle="Testimonial"
                    title="Our Client Response"
                    textAlignment="heading-left"
                    textColor=""
                />
          <div className="row">
            <div className="col-md-3 testcard-1 testimonalcards-1">
              <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  We have seen great results with the PPC services provided by Hirola Infotech Solutions.
                  </h3>
                  <p class="text-block-67">
                  Their team has created highly targeted and effective PPC campaigns that have increased our website traffic and conversions. Their expertise in keyword research and bid management is impressive. Highly recommend their services
                  </p>
                  <div class="div-block-113">
                    <div class="">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Bindhu Kumat</div>
                      </div>
                    </div>
                    <img
                      src="/images/others/tes-1.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/others/tes-1.svg"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
          
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Hirola Infotech Solutions has been instrumental in our influencer marketing campaigns.
                  </h3>
                  <p class="text-block-67">
                  They have helped us identify and collaborate with relevant influencers, resulting in increased brand visibility and customer engagement. Their knowledge of the influencer landscape is impressive. Highly recommend their services

                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Josaf</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/testimonal-images/img-4.png"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>              <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Hirola Infotech Solutions: Crafting User-Friendly and Visually Stunning Websites for Online Buyers"
                  </h3>
                  <p class="text-block-67">
                  Hirola Infotech Solutions has a team oftalented web developers who create stunning websites that are both functional and visually appealing. The websites they do more user-friendly websites for online buyers
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">RAGHU GOWDA</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Your Dedicated Partner for High-Quality SEO Services with a Seamless Experience
                  </h3>
                  <p class="text-block-67">
                  Working with Hirola has been fantastic. It isn't easy choosing the right company to work with for seo services, but they are very dedicated to getting the work done right while being easy to work with in the process. Hirola work is very high quality, you can be confident that you will be happy choosing them                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Sreevardhan Reddy</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 testcard-2 testimonalcards-2">
            <div className="review-sec-cards">
                <div class="">
                <img
                        src="/images/testimonal-images/img-3.png"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Turning Ideas into Stunning Reality with Creative Web Development
                  </h3>
                  <p class="text-block-67">
                  I am amazed by the creativity of the web developers at Hirola Infotech Solutions. They have brought my ideas to life with their exceptional coding skills. Their creativity made my idea beautiful. Thanks to hirola web development team!
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Preetham Shetty</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  
                  <div class="div-block-113">
                    <div class="div-block-114 row">
                    <img
                        src="/images/others/tes-1.svg"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                    
                    </div>
                   
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Exceptional Digital Marketing Expertise for Outstanding Results
                  </h3>
                  <p class="text-block-67">
                  I recently had the pleasure of working with Hirola Infotech Solutions for my company's digital marketing needs, and I must say that the experience has been outstanding. Their team's expertise and dedication to delivering exceptional results have truly set them apart from other digital marketing agencies I've worked with in the past.
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Vinay Kumar.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/testimonal-images/img-4.png"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Your Trusted Digital Partner for Building Success from the Ground Up
                  </h3>
                  <p class="text-block-67">
                  Hirola InfoTech Solutions has been great in helping our company from the scratch. They understood our requirements quite well. The team is quite impressive which is what a social media marketing agency should be like. I am really thankful to Hirola for being my digital partner from past one and half year.
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Phanindra Varma.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Delivering Exceptional Results in Digital Marketing Services
                  </h3>
                  <p class="text-block-67">
                  Hirola Infotech Solutions are the best in the Digital Marketing Services, I have got an exceptional result from hirola in terms of sales. I’m extremely satisfied with Hirola’s work                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Shaik Fakruddin.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-md-3 testcard-3 testimonalcards-3">
            <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Bangalore's Best: Hirola Infotech Solutions Pvt Ltd for Top-notch Digital Marketing and Branding
                  </h3>
                  <p class="text-block-67">
                  First of all , had a great experience working with you guys ( Hirola infotech solutions pvt ltd ) , provided end to end digital marketing services in bangalore which really helped our growth in business and had great return on investments .Special thanks to the directors of the company and the supporting staff.
Highly recommending this company for best digital marketing and branding services in bangalore
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Ramraj</div>
                        {/* <div class="text-block-66">Startup Founder</div> */}
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Proudly Recommending Hirola Infotech Solutions Pvt Ltd: Your Trusted Partner for Global Business Growth
                  </h3>
                  <p class="text-block-67">
                  Professional!! Thanks For the supporting team for always walking along with us for the best results, Coming to designer they are at different level and mesmerised us with their creative skills and finally digital marketing services they provided was a peak level exhibition from hirola infotech solutions and thanks for joining with us. I proudly refer other to join hands with hirola infotech solutions in Bangalore for global business
<br />
Thank you Hirola infotech solutions Pvt ltd

                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">CafePress.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/others/tes-1.svg"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Hirola Infotech Solutions: Your Go-To Partner for Achieving Page 1 Success on Google
                  </h3>
                  <p class="text-block-67">
                  Straight talking and clear outcomes. Wouldn't go anywhere else for my digital support. If your website is dying on page 3 of Google and you need a boost to get it to page 1, these guys will get you there. Thanks to Team HIROLA INFOTECH SOLUTIONS
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">HSBC BANK INDIRANAGAR.</div>
                        {/* <div class="text-block-66">Startup Founder</div> */}
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/testimonal-images/img-4.png"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-3 testcard-4 testimonalcards-4">
            <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Delivering Excellence in SEO with Professionalism and Creativity
                  </h3>
                  <p class="text-block-67">
                  I am super amazed and impressed with the quality of the final work Hirola InfoTech has provided. The team is very professional, they accomplished my company’s SEO goal within a few months, transparency was maintained during the whole course of the project, and the team was always willing to put the best creative ideas on the desk. I can't imagine hiring any other team for SEO services. Thanks a lot to Hirola and its amazing team!!
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Sathish Kuraku.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/others/tes-1.svg"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                    My work has been simplified, my productivity has increased
                    and I have been faster.
                  </h3>
                  <p class="text-block-67">
                  Having been through a number of digital marketing agencies I was skeptical about employing another, but I have to say Hirola is a breath of fresh air. Within 3 months we saw a complete turnaround in our website performance and new enquiries went from strength-to-strength. These guys really life and breath digital and think outside the box when it comes to campaigns and report on everything. Would highly recommend.
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">C PAVAN KUMAR.</div>
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards d-none">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  
                  <div class="div-block-113">
                    <div class="div-block-114 row">
                     
                    
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-110 pp">
                  <img
                    src="/images/testimonal-images/g-logo.png"
                    loading="lazy" alt=""
                    class="image-48 mt--20"
                  />
                  <h3 class="text-block-63">
                  Hirola Infotech Solutions: Creating an Integrated Workspace and Delivering Beyond Expectations in Digital Marketing
                  </h3>
                  <p class="text-block-67">
                  It creates very integrative work space. They have a good hands on the Digital marketing services. I am happy with Hirola and felt like they deliver more than we expect . They keep a minimum standard in overall. I have peers who have more connection with Hirola and its team which was helper me a lot to make it as a choice.
                  </p>
                  <div class="div-block-113">
                    <div class="div-block-114">
                     
                      <div class="div-block-115">
                        <div class="text-block-65">Gopal G</div>
                        {/* <div class="text-block-66">Startup Founder</div> */}
                      </div>
                    </div>
                    <img
                      src="/images/testimonal-images/five-star.svg"
                      loading="lazy" alt=""
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="review-sec-cards">
                  <div className="review-sec-cards">
                <div class="div-block-images pp">
                 <div className="">
              <img
                        src="/images/others/tes-1.svg"
                        loading="lazy" alt=""
                        class="image-49"
                      />
                 </div>
               
                 
                 
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

               <FooterCta/>
                <FooterOne parentClass="" />
               {/* </Reveal> */}
            </main>
        </>
    )
}

export default Testimonials;