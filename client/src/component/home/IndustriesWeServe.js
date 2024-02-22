import React from 'react'
import homeData from '../../data/home/homedata.json';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import Tilty from 'react-tilty';
const allHomedata = homeData;
console.log(allHomedata)
const IndustriesWeServe = () => {
  return (
   
    <div className="section section-padding bg-color-light pb--80 pb_lg--40 pb_md--20 ins-serve">
   {
    allHomedata.map((homeData)=>(
        <div className="container">
        <SectionTitle
            subtitle="Industries We Serve"
            title={homeData.industriesWeServe.title}
            description={homeData.industriesWeServe.description}
            textAlignment="heading-left heading-light-left mb--100 text-white"
            textColor=""
        />

        <div className="row">
            {homeData.industriesWeServe.industriesServices.map((data) => (
                <div className="col-lg-4" key={data.id}>
                {/* <Tilty perspective={800} reset={true}> */}
                <Link to={process.env.PUBLIC_URL + `/industries/${slugify(data.title)}`} className="more-btn">
                    <div className="about-quality about-home-quality">
                        <img src={data.image} loading="lazy" alt={data.title} />
                        <h5 className="title">{data.title}</h5>
                        <p>{data.description}</p>
                    </div>
                    </Link>
                {/* </Tilty> */}
                </div>

            ))}
            

        </div>
        {/* <div className="row">
            {homeData.industriesWeServe.industriesServices.map((data) => (
                <div className="col-lg-6" key={data.id}>
                <Link to={process.env.PUBLIC_URL + `/industries/${slugify(data.title)}`} className="more-btn">
                    <div className="about-quality about-home-quality">
                <div className="row align-items-center">
                    <div className="col-md-10">

                        
                        <h5 className="title">{data.title}</h5>
                        <p>{data.description}</p>
                    </div>
                    <div className="col-md-2">
                    <img src={data.image} loading="lazy" alt={data.title} />
                    </div>
                    </div>
                </div>
                    </Link>
                </div>
            ))}
            

        </div> */}
    </div>
    ))
   }
    {/* <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} loading="lazy" alt="Circle" /></li>
        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} loading="lazy" alt="Circle" /></li>
        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} loading="lazy" alt="Circle" /></li>
    </ul> */}
</div>
  )
}

export default IndustriesWeServe