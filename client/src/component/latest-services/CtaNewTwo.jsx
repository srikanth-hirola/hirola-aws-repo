


import React, { useState } from "react";
import BlogFormTwo from "../contact/BlogFormTwo";
import { faqData } from "../../data/ServiceCms/ServicesCmsData";
const CtaNewTwo = () => {
  const accordionItems = faqData

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <div className="cta-service-three">
        <div className="cta-service-sub-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="cta-services-title">
                  <div className="cta-services-title-sub">
                   
                    <h5>{accordionItems.title}</h5>
                    <p>{accordionItems.description}</p>
                  </div>
                  {/* Dynamically generate accordion items */}
                  {accordionItems.faqData.map((item) => (
                    <div className="faq-drawer" key={item.id}>
                      <input
                        className="faq-drawer__trigger"
                        id={`faq-drawer-${item.id}`}
                        type="checkbox"
                        checked={openAccordion === item.id}
                        onChange={() => handleAccordionClick(item.id)}
                      />
                      <label
                        className="faq-drawer__title"
                        htmlFor={`faq-drawer-${item.id}`}
                      >
                        {item.title}
                      </label>
                      <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-7">
                <BlogFormTwo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaNewTwo;
