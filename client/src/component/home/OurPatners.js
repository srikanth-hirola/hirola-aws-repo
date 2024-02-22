import React from 'react'
import homedata from '../../data/home/homedata.json';
const patnerData = homedata;
const OurPatners = () => {
  return (
    <>
<section className=' patner-bg' >
{
    patnerData.map((homeData)=>(
        <div className="container">
     

        <div className="row">
            {homeData.ourPatners.map((data) => (
                <div className="col-sm-3 patner-img" key={data.id}>
                        <img src={data.image} loading="lazy" alt={data.id} />
                       
                    </div>
            ))}
            

        </div>
    </div>
    ))
   }
</section>
    </>
  )
}

export default OurPatners