import React from 'react'
import AviationSteps from './Steps'

const AviationSix = () => {
  return (
    <div>
      <section id="aviation-process " className='pb--80 '>
        <div className="container">
            <div className="row">
                <div className="col-md-7 av-sec-one1">
                    <img src="https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="progress image" />
                </div>
                <div className="col-md-5 av-sec-two2">
                    <AviationSteps/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AviationSix
