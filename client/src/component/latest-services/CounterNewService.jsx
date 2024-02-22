import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import Tilty from 'react-tilty';
import { counterData } from '../../data/ServiceCms/ServicesCmsData';
const Data = [
    {  
        id: 1,
        light_icon: "https://cdn-icons-png.flaticon.com/128/3781/3781917.png",
        dark_icon: "https://cdn-icons-png.flaticon.com/128/3781/3781917.png",
        countNum: 4500,
        "workDone":"PAGES EDITED",
        "workProgress":"pages",
        "symbol":"+",
    },
    {  
        id: 2,
        light_icon: "https://cdn-icons-png.flaticon.com/128/10/10910.png",
        dark_icon: "https://cdn-icons-png.flaticon.com/128/10/10910.png",
        countNum: 150,
        "workDone":"JOBS COMPLETED",
        "workProgress":"37 in progress",
        "symbol":"+",
    },
    {  
        id: 3,
        light_icon: "https://cdn-icons-png.flaticon.com/128/11501/11501812.png",
        dark_icon: "https://cdn-icons-png.flaticon.com/128/11501/11501812.png",
        countNum: 400,
        "workDone":"WE'VE MANAGED",
        "workProgress":"campaigns",
        "symbol":"+",
    },
    {  
        id: 4,
        light_icon: "https://cdn-icons-png.flaticon.com/128/10443/10443313.png",
        dark_icon: "https://cdn-icons-png.flaticon.com/128/10443/10443313.png",
        countNum: 99,
        "workDone":"HAPPY CUSTOMERS",
        "workProgress":"percent",
        "symbol":"%",
    }
   
];

const CounterNewService = ({colSize, layoutStyle, evenTopMargin}) => {

    return (
        <>
           <div className="counter-service">
            <div className="counter-service-sub">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                  <div className="counter-service-text">
                    <h3>{counterData.title} <span>{counterData.subTitle}</span></h3>
                    <p>{counterData.description}</p>
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="row align-items-center">
                  {counterData.counterData.map((data,index) => (
                <div className='col-md-6' key={data.index} >
                <div className="row align-items-center my-3">
                    <div className="col-md-3">

                <Tilty perspective={10000} reset={true}>
                    <div className='counter-service-image'>

                        { 
                            layoutStyle === "counterup-style-2" ? 
                            <div className="icon">
                                
                                <img className="" src={process.env.PUBLIC_URL + data.img} loading="lazy" alt="Icon" />
                            </div> : 
                            <div className="icon">
                                <img className="" src={process.env.PUBLIC_URL + data.img} loading="lazy" alt="Icon" />
                            </div> 
                        }

                    
                    </div>
                    </Tilty>
                    </div>
                    <div className="col-md-9">
                    <div className="count-number">
                            <TrackVisibility>
                                {({isVisible}) => (
                                   <>
                                   <h3 className="">
                                        {isVisible ? <CountUp end={data.number} duration={1} /> : null}
                                    </h3>
                                    <h4 className="">{data.symbol}</h4>
                            <p className="">{data.data}</p>
                                   </>
                                )}  
                            </TrackVisibility>
                           
                        </div>
                       
                        
                    </div>
                </div>
                </div>
            ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </>
    )
}



export default CounterNewService;