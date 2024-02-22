import React from 'react';
import clientsData from '../../data/clients/Clients.json'
import SectionTitle from '../../elements/section-title/SectionTitle';
import { Link } from 'react-router-dom';
const ClientsData = clientsData;

const BrandItem = () => {
    return (
        <>
         <SectionTitle
                            subtitle="Our Clientele"
                            title="Clients We Served"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
            {ClientsData.slice(0,10).map((data, index) => (
                <div className="col-lg-2 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.imageUrl} loading="lazy" alt="Brand" className='mt-3 mb-3'/>
                    </div>
                </div>
            ))}
            <Link to={process.env.PUBLIC_URL + "/about-us"} className="axil-btn btn-fill-primary btn-medium clients-btn ">For More </Link> 

        </>
    )
}

export default BrandItem;