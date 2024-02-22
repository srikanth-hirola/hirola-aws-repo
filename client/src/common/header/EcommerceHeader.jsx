import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import Nav from '../../common/header/Nav';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';

import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import EcommerceNav from './EcommerceNav';
// import { Link } from 'react-router-dom';


const EcommerceHeader = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.axil-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }


    return (
        <>
            <header className="header axil-header header-style-1">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/logo.svg"
                                dimage="/images/logo-3.svg"
                                simage="/images/logo.svg"
                                />
                            </div>
                            <div className="header-main-nav">
                                <EcommerceNav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="sidemenu-btn d-xl-none d-none">
                                        <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        
                                    </li>
                                </ul>
                                <a href="https://hirolaacad.com/" target='_blank' rel="noopener noreferrer" className="axil-btn btn-fill-primary btn-small">Learn Digital Marketing</a>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            <img className="light-mode" src={process.env.PUBLIC_URL + "/images/logo-3.svg"} loading="lazy" alt="Site Logo" />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={MobileMenuHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <EcommerceNav />
                </div>
            </div>
        </div>
        </>
    )
}

export default EcommerceHeader;