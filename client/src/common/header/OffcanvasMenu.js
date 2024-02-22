import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";
const detailsService = ServiceData;

console.log(detailsService);
const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas
      show={offcanvasShow}
      onHide={offcanvasHide}
      placement="end"
      className="header-offcanvasmenu"
    >
      <Offcanvas.Header closeButton>
        <img src="/images/logo.svg" loading="lazy" alt="menu-logo" />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row ">
          <div className="col-lg-12 col-xl-12">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/portfolio"}>
                  Portfolio
                  <div className="mob-menu">
                    <ul className="">
                      <li>
                        {detailsService.slice(9, 44).map((data) => (
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              `/services/${slugify(data.title)}`
                            }
                          >
                            {data.title}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/services"}>
                  Services
                  <div className="mob-menu">
                    <ul className="">
                      <li>
                        {detailsService.slice(9, 44).map((data) => (
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              `/services/${slugify(data.title)}`
                            }
                          >
                            {data.title}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/products"}>
                  Our Products
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/industries"}>
                  Industries
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/case-study"}>
                  {" "}
                  Case Studies
                </Link>
              </li>

              <li>
                <Link to={process.env.PUBLIC_URL + "/cities-we-are"}>
                  Cities We Are
                </Link>
              </li>

              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
