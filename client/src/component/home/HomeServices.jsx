import React from "react";

const HomeServices = () => {
  return (
    <div>
      <div id="home-services">
        <div className="container-fluid">
          <div className="home-services-section">
            <h6>STRATEGIC LINK BUILDING</h6>
            <h2>
              Grow Your Traffic, Leads & Revenue with{" "}
              <span>Results-Driven SEO</span>
            </h2>
            <div className="sr-section">
              <div className="sr-section-one">
                <h6>Targeted Strategies</h6>
                <p>
                  Through our years of experience, we’ve also learned that while
                  each channel has its own set of advantages.
                </p>
                <ul>
                  <li>Online Seo</li>
                  <li>Technical Seo Audit</li>
                  <li>PPC Management</li>
                </ul>
              </div>
              <div className="sr-section-two">
                <img
                  // src="https://wgl-demo.net/bili/light/wp-content/uploads/2022/11/h8-4.png"
                  loading="lazy" alt="home-service-image"
                />
              </div>
              <div className="sr-section-three">
                <h6>
                  10 <span>x</span>{" "}
                </h6>
                <h6 className="tr" >Traffic was Multiplied</h6>
                <p>
                  Suppose you cater to customers in different countries with
                  different languages.
                </p>
                <a
                  className="wgl-button btn-size-lg "
                  role="button"
                  // href="https://wgl-demo.net/bili/light/contacts/"
                >
                  <div className="button__content ">
                    <span className="button__text">READ MORE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
