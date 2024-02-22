import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';


const VideoOne = () => {

    const [toggler, setToggler] = useState(false);

    return (
        <>
            <div className="section section-padding-equal bg-color-light">
                <div className="container">
                    <div className="about-expert">
                        <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/about/im-1.jpg"} loading="lazy" alt="Thumbnail" />
                            <div className="popup-video">
                                <button className="play-btn" onClick={ () => setToggler(!toggler) }><FaPlay /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} loading="lazy" alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} loading="lazy" alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} loading="lazy" alt="Line" /></li>
                </ul>
        </div>
        <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/embed/C18BuBr7A6g?autoplay=1'] }/>
    </>
    )
}


export default VideoOne;