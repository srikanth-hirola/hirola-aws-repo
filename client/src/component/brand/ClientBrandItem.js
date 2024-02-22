import React from 'react';
import clientsData from '../../data/clients/Clients.json'
const ClientsData = clientsData;

const ClientBrandItem = () => {
    return (
        <>
            {ClientsData.map((data, index) => (
                <div className="col-lg-2 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.imageUrl} loading="lazy" alt="Brand" className='mt-3 mb-3'/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ClientBrandItem;