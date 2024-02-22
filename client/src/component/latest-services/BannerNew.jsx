import React from 'react'
import { Link } from 'react-router-dom'
import BlogForm from '../contact/BlogForm'
import { bannerData } from '../../data/ServiceCms/ServicesCmsData'
const BannerNew = () => {
  return (
    <>
    <div className="service-new-banner">
      <div className="service-new-banner-sec">
        <div className="">
          <div className="row align-items-center row align-items-center m-0">
            <div className="col-md-12">
              <div className="service-new-banner-sec-text">
                <h2>
                {bannerData.title}
                </h2>
                <p>
{bannerData.description}
</p>                
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-new-banner-sec-image">
              {
                bannerData.images.map((images)=>(
              <div className="bg-gradient-three">
                  <img src={images.image} alt="bg-gradient" />

              </div>
                ))
              }
              
              </div>
              {/* <BlogForm/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BannerNew