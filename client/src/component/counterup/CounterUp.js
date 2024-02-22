import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import Tilty from 'react-tilty';
const Data = [
    {  
        id: 1,
        light_icon: "/images/icon/icon-7.png",
        dark_icon: "/images/icon/icon-10.png",
        countNum: 4500,
        "workDone":"PAGES EDITED",
        "workProgress":"pages",
        "symbol":"+",
    },
    {  
        id: 2,
        light_icon: "/images/icon/icon-8.png",
        dark_icon: "/images/icon/icon-11.png",
        countNum: 150,
        "workDone":"JOBS COMPLETED",
        "workProgress":"37 in progress",
        "symbol":"+",
    },
    {  
        id: 3,
        light_icon: "/images/icon/icon-9.png",
        dark_icon: "/images/icon/icon-12.png",
        countNum: 400,
        "workDone":"WE'VE MANAGED",
        "workProgress":"campaigns",
        "symbol":"+",
    },
    {  
        id: 4,
        light_icon: "/images/icon/apple.png",
        dark_icon: "/images/icon/apple-black.png",
        countNum: 99,
        "workDone":"HAPPY CUSTOMERS",
        "workProgress":"percent",
        "symbol":"%",
    }
   
];

const CounterUp = ({colSize, layoutStyle, evenTopMargin}) => {

    return (
        <>
            {Data.map((data) => (
                <div className={`${colSize} ${(data.id % 2  === 0) ? evenTopMargin : ""}`} key={data.id} >
                <Tilty perspective={10000} reset={true}>
                    <div className={`counterup-progress c-2 countetr-two ${layoutStyle}`}>

                        { 
                            layoutStyle === "counterup-style-2" ? 
                            <div className="icon">
                                
                                <img className="light-icon" src={process.env.PUBLIC_URL + data.light_icon} loading="lazy" alt="Icon" />
                            </div> : 
                            <div className="icon">
                                <img className="light-icon" src={process.env.PUBLIC_URL + data.light_icon} loading="lazy" alt="Icon" />
                            </div> 
                        }

                        <div className="count-number h2">
                            <TrackVisibility>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.countNum} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">{data.symbol}</span>
                        </div>
                        <h4 className='title' >{data.workProgress}</h4>
                        <p className="title">{data.workDone}</p>
                    </div>
                    </Tilty>
                </div>
            ))}
        </>
    )
}



export default CounterUp;