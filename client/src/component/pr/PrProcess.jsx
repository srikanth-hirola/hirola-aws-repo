import React, { useEffect } from "react";

function PrProcess() {
  useEffect(() => {
    const contentSections = document.querySelectorAll(".pr-content-section");
    const navigationLinks = document.querySelectorAll("nav a");

    function smoothScroll(target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }

    function updateNavigation() {
      contentSections.forEach((section) => {
        const sectionName = section.id;
        const navigationMatch = document.querySelector(
          `nav a[href="#${sectionName}"]`
        );

        if (
          section.offsetTop - window.innerHeight / 2 < window.scrollY &&
          section.offsetTop + section.offsetHeight - window.innerHeight / 2 >
            window.scrollY
        ) {
          navigationMatch.classList.add("active-section");
        } else {
          navigationMatch.classList.remove("active-section");
        }
      });
    }

    navigationLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        smoothScroll(targetElement);
      });
    });

    window.addEventListener("scroll", updateNavigation);
    updateNavigation();

    return () => {
      window.removeEventListener("scroll", updateNavigation);
    };
  }, []);

  return (
    <div>
      <section id="our-pr-process">
        <div className="container">
          <h6>Hirola Infotech Solutions PR Process</h6>
          <p className="pr-process-desc">
            At Hirola Infotech Solutions, we believe that a well-defined and
            meticulously executed PR process is the key to building and
            sustaining a positive reputation. Our PR process is designed to
            deliver measurable results and guide our clients on the journey to
            success.
          </p>
          <div className="row ">
            <div className="col-md-3">
              <nav>
                <ul>
                  <li>
                    <a href="#section11">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Understanding Your Goals
                    </a>
                  </li>
                  <li>
                    <a href="#section12">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Research and Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#section13">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Strategy Development
                    </a>
                  </li>
                  <li>
                    <a href="#section14">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Message Crafting
                    </a>
                  </li>
                  <li>
                    <a href="#section15">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Media Engagement
                    </a>
                  </li>
                  <li>
                    <a href="#section16">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Content Creation and Distribution
                    </a>
                  </li>
                  <li>
                    <a href="#section17">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Social Media Management
                    </a>
                  </li>
                  <li>
                    <a href="#section18">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Monitoring and Measurement
                    </a>
                  </li>
                  <li>
                    <a href="#section19">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Adaptation and Optimization:
                    </a>
                  </li>
                  <li>
                    <a href="#section20">
                      <span className="rect"></span>
                      <span className="circle"></span>
                      Client Collaboration
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9">
              <div className="nav-content">
                <div className="pr-content-section" id="section11">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1>Understanding Your Goals</h1>
                      <p>
                        {/* Your content for Section One */}
                        We initiate our journey by delving deep into your organization, understanding your objectives, and identifying your PR goals. Whether it's about increasing brand visibility, managing a crisis, or launching a new product, our team takes the time to comprehend your unique requirements.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/pr/understanding-your-goals.png" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section12">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/images/pr/research-and-analysis.png" loading="lazy" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h1>Research and Analysis</h1>
                      <p>
                        {/* Your content for Section Two */}
                        Next, we embark on comprehensive research, dissecting
                        the market intricacies, and conducting national-scale
                        analyses if necessary. We scrutinize your industry,
                        competitors, target audience, and current public
                        perception to identify opportunities and challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section13">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1>Strategy Development</h1>
                      <p>
                        {/* Your content for Section Three */}
                        Based on the insights from our research, we craft a
                        tailored PR strategy. This strategy encompasses key
                        messages, tactics, and channels that will be employed to
                        achieve your goals. Our strategies are adaptable and
                        designed to align seamlessly with your objectives in the
                        dynamic PR landscape.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/pr/strategy-development.png" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section14">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/images/pr/message-crafting.png" loading="lazy" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h1>Message Crafting</h1>
                      <p>
                        {/* Your content for Section Four */}
                        The heart of our PR process lies in crafting compelling
                        and authentic messages. We create messaging that
                        resonates with your audience while staying true to your
                        brand's values and identity. Our message development is
                        culturally sensitive and informed by a profound
                        understanding of the local context.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section15">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1>Media Engagement</h1>
                      <p>
                        {/* Your content for Section Five */}
                        Our media relations team has forged strong connections
                        with journalists, editors, and influencers across
                        various industries. We strategically engage with the
                        media to ensure your story reaches the right people at
                        the right time.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/pr/media-engagement.png" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section16">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/images/pr/content-creation-and-cistribution.png" loading="lazy" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h1>Content Creation and Distribution</h1>
                      <p>
                        {/* Your content for Section Five */}
                        In the digital age, content is king. Our content experts
                        produce high-quality, tailored content designed to
                        effectively communicate your messages. Whether it's
                        press releases, articles, blog posts, or other
                        materials, our distribution channels ensure maximum
                        reach and impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section17">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1>Social Media Management</h1>
                      <p>
                        {/* Your content for Section Five */}
                        In an era where social media shapes public perception,
                        we take a proactive role in managing your online
                        presence. We create and share content that engages your
                        audience while reinforcing your brand image.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/pr/social-media-management1.png" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section18">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/images/pr/monitoring-and-measurement.png" loading="lazy" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h1>Monitoring and Measurement:</h1>
                      <p>
                        We closely monitor the success of our PR efforts.
                        Tracking media coverage, social media engagement, and
                        audience sentiment allows us to gauge the impact of our
                        strategies. Regular reporting keeps you informed about
                        progress.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section19">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1>Adaptation and Optimization</h1>
                      <p>
                        {/* Your content for Section Five */}
                        The PR landscape is ever-evolving. We continuously adapt
                        our strategies to ensure effectiveness. As we gather
                        data and insights, we optimize our approaches to
                        maximize results.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="/images/pr/adaptation-and-optimization.png" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="pr-content-section" id="section20">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <img src="/images/pr/client-collaboration.png" loading="lazy" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h1>Client Collaboration</h1>
                      <p>
                        {/* Your content for Section Five */}
                        Throughout the PR process, we maintain open lines of
                        communication. Collaboration, feedback, and input from
                        you are encouraged to ensure our strategies align with
                        your evolving needs and expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrProcess;
