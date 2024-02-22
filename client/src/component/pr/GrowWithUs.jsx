import React, { useEffect } from "react";

function GrowWithUs() {
  useEffect(() => {
    const contentSections = document.querySelectorAll(".content-section");
    const navigationLinks = document.querySelectorAll("nav a");

    function smoothScroll(target) {
      window.scrollTo({
        // top: target.offsetTop,
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
      <section id="grow-with-us">
        <div className="container">
        <div className="row ">
         <div className="col-md-3">
         <nav>
            <ul>
              <li>
                <a href="#section1">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Media Relations:
                </a>
              </li>
              <li>
                <a href="#section2">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Crisis Management
                </a>
              </li>
              <li>
                <a href="#section3" className="d-none">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#section4">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#section5" className="d-none">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Event Management
                </a>
              </li>
              <li>
                <a href="#section6">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Media Monitoring
                </a>
              </li>
              <li>
                <a href="#section7">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Strategic Planning
                </a>
              </li>
              <li>
                <a href="#section8">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Digital PR
                </a>
              </li>
              <li>
                <a href="#section9">
                  <span className="rect"></span>
                  <span className="circle"></span>
                  Press Release Distribution
                </a>
              </li>
            </ul>
          </nav>
         </div>
      <div className="col-md-9">
      <div className="nav-content">
       <div className="content-section" id="section1">
           <div className="row align-items-center">
           <div className="col-md-6">
           <h1>Media Relations</h1>
            <p>
              {/* Your content for Section One */}
              Our Media Relations service builds strong connections with media
              professionals across Bangalore and India. We strategically pitch
              your message to the right outlets and influencers, ensuring
              effective reach to your target audience.{" "}
            </p>
           </div>
           <div className="col-md-6">
            <img src="/images/pr/media-relations.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section" id="section2">
           <div className="row">
            <div className="col-md-6">
            <h1>Crisis Management</h1>
            <p>
              {/* Your content for Section Two */}
              When crises strike, our Crisis Management team navigates Indian
              market nuances swiftly. We offer cultural understanding, legal
              expertise, and proactive strategies to protect your Bangalore and
              Indian reputation.{" "}
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/risis-management.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section d-none" id="section3">
            <div className="row">
              <div className="col-md-6">
              <h1>Social Media Management</h1>
            <p>
              {/* Your content for Section Three */}
              Boost your Bangalore and Indian online presence with our Social
              Media Management. We create engaging, culturally relevant content
              that sparks meaningful conversations and builds a loyal following.{" "}
            </p>
              </div>
              <div className="col-md-6">
            <img src="/images/pr/social-media-management.png" loading="lazy" alt="" />
           </div>
            </div>
          </div>
          <div className="content-section" id="section4">
           <div className="row">
            <div className="col-md-6">
            <h1>Content Creation</h1>
            <p>
              {/* Your content for Section Four */}
              In today's content-driven world, our Content Creation service
              crafts engaging messaging tailored to the Indian market. We convey
              your story authentically through press releases, articles, and
              more.{" "}
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/content-creation.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section d-none" id="section5">
           <div className="row">
            <div className="col-md-6">
            <h1>Event Management</h1>
            <p>
              {/* Your content for Section Five */}
              Host successful Bangalore events with our Event Management team.
              We handle logistics, allowing you to focus on your message and
              audience for a memorable local impact.{" "}
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/event-management.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section" id="section6">
           <div className="row">
            <div className="col-md-6">
            <h1>Media Monitoring</h1>
            <p>
              {/* Your content for Section Five */}
              Keep your finger on the pulse of your brand's online presence with
              our Media Monitoring service. We meticulously track and analyze
              news articles, social media mentions, and online discussions to
              provide you with real-time insights into your brand's reputation
              and industry trends. Stay informed and make data-driven decisions
              with our comprehensive media monitoring solutions.
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/media-monitoring.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section" id="section7">
           <div className="row">
            <div className="col-md-6">
            <h1>Strategic Planning</h1>
            <p>
              {/* Your content for Section Five */}
              Chart a clear path to success with our Strategic Planning services. Our expert strategists collaborate with you to define your business goals and objectives. We then create a tailored roadmap, outlining the steps needed to achieve them. From market analysis to actionable strategies, our strategic planning ensures your business stays on course for growth and success.
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/strategy-planning.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section" id="section8">
           <div className="row">
            <div className="col-md-6">
            <h1>Digital PR</h1>
            <p>
              {/* Your content for Section Five */}
              Harness the full power of the digital age with our Digital PR services. We leverage online platforms, social media, and digital storytelling to enhance your brand's visibility and reputation. Our digital PR experts craft compelling narratives and engage with your target audience, ensuring your brand shines in the digital landscape.
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/digital-PR.png" loading="lazy" alt="" />
           </div>
           </div>
          </div>
          <div className="content-section" id="section9">
           <div className="row">
            <div className="col-md-6">
            <h1>Press Release Distribution</h1>
            <p>
              {/* Your content for Section Five */}
              Make waves in the media world with our Press Release Distribution service. We help you craft impactful press releases that tell your brand's story effectively. Then, we ensure wide-reaching distribution to key media outlets, journalists, and influencers. Whether it's a product launch or a major announcement, we get your message in front of the right people at the right time.
            </p>
            </div>
            <div className="col-md-6">
            <img src="/images/pr/press-release-distribution.png" loading="lazy" alt="" />
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

export default GrowWithUs;
