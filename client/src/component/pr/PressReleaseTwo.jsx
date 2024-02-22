import React from 'react'
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
const PressReleaseTwo = () => {
  return (
    <div>
      <section id="revenue">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="revenue-text">
                    <h6>Drive</h6>
                    <div className="revenue-img">
                        <img src="/images/pr/drive-revenue.png" loading="lazy" alt="drive revenue" />
                        <span>Revenue</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">

                <div className="row">
                  <div className="col-md-12 revenue-card">
                  <TrackVisibility >
                                {({isVisible}) => (
                                   <>
                                   <h6 className="number count ">
                                       
                                      
                                        {isVisible ? <CountUp end={99} duration={3} /> : null}
                                     %
                                  </h6>
                                 <span> Happy Customers</span>
                                   </>
                                )}  
                            </TrackVisibility>
                  </div>
                  <div className="col-md-12 revenue-card">
                  <TrackVisibility >
                                {({isVisible}) => (
                                   <>
                                   <h6 className="number count ">
                                       
                                      
                                        {isVisible ? <CountUp end={99} duration={3} /> : null}
                                     %
                                  </h6>
                                 <span>Success Rate</span>
                                   </>
                                )}  
                            </TrackVisibility>
                  </div>
                  <div className="col-md-12 revenue-card">
                  <TrackVisibility >
                                {({isVisible}) => (
                                   <>
                                   <h6 className="number count ">
                                       
                                      
                                        {isVisible ? <CountUp end={99} duration={3} /> : null}
                                     %
                                  </h6>
                                 <span>Client Retains</span>
                                   </>
                                )}  
                            </TrackVisibility>
                  </div>
                 
                </div>



                
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PressReleaseTwo
