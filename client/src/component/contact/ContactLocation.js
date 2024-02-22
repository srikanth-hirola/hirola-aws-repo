import React, { useEffect, useState } from 'react';
import LocationData from '../../data/contact/LocationData.json';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { useApiCalls } from '../../Hooks/useApiCalls';

const allData = LocationData;

const ContactLocation = () => {
    const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState([]);
  console.log("cities", contact)
  const [pagefound, setPageFound] = useState('');
    const { fetchBunchData } = useApiCalls();

    useEffect(() => {
        let endpoint = 'admin/cities'
        fetchBunchData(endpoint, setLoading, setContact, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {contact.map((data, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                <div className="office-location">
                        <div className="thumbnail">
                            {/* <Link to={process.env.PUBLIC_URL + `/${slugify(data.cityName)}`}> */}
                            <img src={process.env.PUBLIC_URL + data.Dimage.url} loading="lazy" alt="Office" />
                            {/* </Link> */}
                        </div>
                        <div className="content">
                        {/* <Link to={process.env.PUBLIC_URL + `/${slugify(data.cityName)}`}> */}
                        <h4 className="title">{data.cityName}</h4>
                        {/* </Link> */}
                            <p>{data.Address}</p>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* {allData.slice(0,4).map((data, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}><img src={process.env.PUBLIC_URL + data.thumb} loading="lazy" alt="Office" /></Link>
                        </div>
                        <div className="content">
                        <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}><h4 className="title">{data.title}</h4></Link>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            ))} */}
        </>
    )
}

export default ContactLocation;