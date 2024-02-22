import React from 'react'
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet-async';

const SEO = ( {title, description, name, type} ) => {
    return (
        <>
            {/* <meta charSet="utf-8" />
            <title>Hirola Infotech Solutions | {title}</title>
            {/* <description>{description}</description> */}
            {/* <meta name="robots" content="noindex, follow" />
            <meta name="description" content={description}/> */} 
            <Helmet>
{ /* Standard metadata tags */ }
<title> Hirola Infotech Solutions {title}</title>
<meta name='description' content={description} data-rh="true"/>
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />

{ /* End Twitter tags */ }
</Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;