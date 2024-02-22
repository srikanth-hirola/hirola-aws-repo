import React from 'react';
import { Link } from 'react-router-dom';



const BreadCrumbOne = ({title, page}) => {
    return (
        <div className="breadcrum-area">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                        </li>
                        
                        {/* <Link to={process.env.PUBLIC_URL + "/${url}"}><li className="" dangerouslySetInnerHTML={{__html: page}}></li></Link> */}
                        <li className="active" dangerouslySetInnerHTML={{__html: title}}></li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-11.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
            </ul>
        </div>
    )
}

export default BreadCrumbOne;