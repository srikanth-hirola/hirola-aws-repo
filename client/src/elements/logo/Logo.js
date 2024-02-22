import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({limage, dimage, simage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img className="light-version-logo" src={process.env.PUBLIC_URL + limage} loading="lazy" alt="logo" />

            <img className="sticky-logo" src={process.env.PUBLIC_URL + simage} loading="lazy" alt="logo" />
        </Link>
    )
}


export default Logo;