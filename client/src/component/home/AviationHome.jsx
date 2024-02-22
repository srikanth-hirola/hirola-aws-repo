import React from 'react'
import AvaitionTypes from '../../pages/aviation/AvaitionTypes'
import { Link } from 'react-router-dom'

const AviationHome = () => {
  return (
    <div className='av-home'>
      <div className="row mt-5 mb-3 pt-5">
        <div className="col-md-6">
            <div className="av-home-text">
                <h4> Sky </h4>
                {/* <br /> */}
                <h5> Marketing</h5>
            </div>
        </div>
        <div className="col-md-6">
            <div className="av-home-desc">
            <p>                In-flight advertising is advertising that targets potential consumers aboard an airplane. It includes commercials during in-flight entertainment programming, advertisements in in-flight magazines or on Boarding Passes, ads on seatback tray tables and overhead storage bins, and sales pitches by flight attendants.
</p>
<Link className='axil-btn btn-fill-primary btn-small' to='/avaiation' >Click Here To Know More </Link>
            </div>
        </div>
      </div>
      <div className="av-home-img">
        <img src="/images/aviation/av-home.jpg" loading="lazy" alt="" />
      </div>
      <section id="avaition-types">
        <div className="container">
      {/* <h2 className='text-center av-bn-1' >Different Avaition Brand Services We Offer</h2> */}
            <div className="row">
                <div className="col-md-3 aviation-img ">
                {/* <Link to='/avaiation-indigo/'> */}
                <img src="/images/aviation/indigo.webp" loading="lazy" alt="indigo-image" />
                {/* </Link> */}
                </div>
                <div className="col-md-3 aviation-img ">
                {/* <Link to='/avaiation-akasa/'> */}
                <img src="/images/aviation/vistara.webp" loading="lazy" alt="vistara-image" />
                {/* </Link> */}
                </div>
                <div className="col-md-3 aviation-img ">
                {/* <Link to='/avaiation-air-india/'> */}
                <img src="/images/aviation/spicejet.webp" loading="lazy" alt="spicejet-image" />
                {/* </Link> */}
                </div>
                <div className="col-md-3 aviation-img ">
                {/* <Link to='/avaiation-vistara/'> */}
                <img src="/images/aviation/arindia.webp" loading="lazy" alt="arindia-image" />
                {/* </Link> */}
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AviationHome
