import React from 'react'
import { FaClock, FaUserAlt } from 'react-icons/fa'

const ProductSectionFive = () => {
  return (
   <>
         <section className="pb--80 pt--80">
        <div className="container">
    <div className="row">
    <div className="col-md-6">
        <div className="product-inf">
        <h3>Experience your product grow business</h3>
        <p>Conveniently drive stand-alone total linkage for process-centric content. Enthusiastically administrate robust initiatives quickly unleash collaborative with client-focused.</p>
        <div className="prod-list">
            <div className="col-md-6">
            <FaUserAlt/>
                <h4>Customer analysis</h4>
                <p>Objectively exceptional via customized intellectual.</p>
            </div>
            <div className="col-md-6">
            <FaClock/>
                <h4>Real time metrics</h4>
                <p>Interactively integrate extensible directed developer.</p>
            </div>
        </div>
        </div>
      </div>
    <div className="col-md-6">
        <div className="prod-image">
        <img src="https://quiety.themetags.com/assets/img/dashboard-img.png" loading="lazy" alt="" />
        </div>
      </div>

    </div>
        </div>
      </section>
   </>
  )
}

export default ProductSectionFive