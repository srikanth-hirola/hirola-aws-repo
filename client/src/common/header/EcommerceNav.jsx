import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const EcommerceNav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
               
                <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/services"}>Services</Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Resourses <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/blog"}>Blogs </Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/case-studies"}>Case Studies</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/testimonials"}>Testimonial</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/news"}>News</Link></li>
                        
                        <li><Link to={process.env.PUBLIC_URL + "/cities-we-are"}>Cities We Are</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Our Team</Link></li>
                    </ul>
                </li>
                
                <li><Link to={process.env.PUBLIC_URL + "/contact-us"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default EcommerceNav;