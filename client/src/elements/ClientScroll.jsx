import React from "react";
import TestimonalData from "../data/testimonial/TestimonialData.json";
import SectionTitle from "./section-title/SectionTitle";
import clientsData from "../data/clients/Clients.json";
const ClientsData = clientsData;
const content = TestimonalData;
const ClientScroll = () => {
  console.log(ClientsData);
  return (
    <>
      <div>
       
      </div>
      <section id="clientsHome">
        <div className="container ">
          <SectionTitle
            subtitle="Our Clientele"
            title="Clients We Served"
            description=""
            textAlignment="heading-left"
            textColor=""
          />
        <div className="client-light-version-logo">
        <div class="marquee">
            <div class="marquee__group ">
              {ClientsData.slice(0, 20).map((data, index) => (
                <>
                  <img
                    src={process.env.PUBLIC_URL + data.imageUrl}
                    loading="lazy" alt="Brand"
                    className="mt-3 mb-3 "
                  />
                </>
              ))}
            </div>

            <div aria-hidden="true" class="marquee__group">
              {ClientsData.slice(0, 20).map((data, index) => (
                <>
                  <img
                    src={process.env.PUBLIC_URL + data.imageUrl}
                    loading="lazy" alt="Brand"
                    className="mt-3 mb-3 "
                  />
                </>
              ))}
            </div>
          </div>

          <div class="marquee marquee--reverse">
            <div class="marquee__group">
              {ClientsData.slice(21, 40).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>

            <div aria-hidden="true" class="marquee__group">
              {ClientsData.slice(21, 40).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>
          </div>
          <div class="marquee">
            <div class="marquee__group">
              {ClientsData.slice(41, 60).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>

            <div aria-hidden="true" class="marquee__group">
              {ClientsData.slice(41, 60).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>
          </div>
          <div class="marquee marquee--reverse">
            <div class="marquee__group">
              {ClientsData.slice(61, 80).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>

            <div aria-hidden="true" class="marquee__group">
              {ClientsData.slice(61, 80).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>
          </div>
          <div class="marquee">
            <div class="marquee__group">
              {ClientsData.slice(81, 98).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>

            <div aria-hidden="true" class="marquee__group">
              {ClientsData.slice(81, 98).map((data, index) => (
                <img
                  src={process.env.PUBLIC_URL + data.imageUrl}
                  loading="lazy" alt="Brand"
                  className="mt-3 mb-3"
                />
              ))}
            </div>
          </div>
        </div>
       
        </div>
      </section>
    </>
  );
};

export default ClientScroll;
