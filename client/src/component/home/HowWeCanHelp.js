import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
// import ProcesstData from "../../data/process/ProcessData.json";
import homeData from '../../data/home/homedata.json';
import Tilty from 'react-tilty';

const allHomedata = homeData;

const HowWeCanHelp = () => {
    return (
        
        <div className="section section-padding  pb--70">
{
    allHomedata.map((homeData)=>(
        <>
        <SectionTitle 
                subtitle="We’re a place to learn, thrive and grow."
                title={homeData.whyToChooseUs.title}
                description={homeData.whyToChooseUs.description}
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {homeData.whyToChooseUs.servicesProvided.map((data) => (
                    <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
                        <Tilty perspective={2000}>
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="Thumbnail" />
                            </div>
                        </Tilty>
                    <div className="content">
                        <span className="subtitle">{data.subtitle}</span>
                        <h3 className="title">{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
                <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} loading="lazy" alt="Line" /></li>
            </ul>
        </>
    ))
}
        </div>
    )
}

export default HowWeCanHelp;