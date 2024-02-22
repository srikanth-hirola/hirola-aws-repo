import React from 'react'
import { Link } from 'react-router-dom'

const AvaitionTypes = () => {
  return (
    <div>
      <section id="avaition-types-new">
        <div className="container">
      <h2 className='text-center av-bn-1' >Different Avaition Brand Services We Offer</h2>
            <div className="row">
                <div className="col-md-3 aviation-img ">
                <Link to='/avaiation-indigo/'>
                <img src="/images/aviation/indigo.png" loading="lazy" alt="indigo" />
                </Link>
                </div>
                <div className="col-md-3 aviation-img ">
                <Link to='/avaiation-akasa/'>
                <img src="/images/aviation/indigo.png" loading="lazy" alt="indigo" />
                </Link>
                </div>
                <div className="col-md-3 aviation-img ">
                <Link to='/avaiation-air-india/'>
                <img src="/images/aviation/indigo.png" loading="lazy" alt="indigo" />
                </Link>
                </div>
                <div className="col-md-3 aviation-img ">
                <Link to='/avaiation-vistara/'>
                <img src="/images/aviation/indigo.png" loading="lazy" alt="indigo" />
                </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AvaitionTypes
