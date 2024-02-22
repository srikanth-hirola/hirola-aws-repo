import React from 'react'
import { Link } from 'react-router-dom'
import PopUpForm from '../contact/PopUpForm'

const HomeNewsLetter = () => {
  return (
    <div>
      <section id="home-news-letter">
        <div className="container">
            <div className="news-letter-home">
                <div className="row">
                    <div className="col-md-7" style={{backgroundImage:`url('/images/banner/home7-1.jpg')`}} >
                        Hi-Ya
                    </div>
                    <div className="col-md-5">
                      <div className="section-news-one">
                      <h6>
                        GROW YOUR BUSINESS
                  <span>
                    10x FASTER WITH US!
                    </span>
                        </h6>
                      </div>
                        <Link to=''>
                      <div className="section-news-two">
                            <p><PopUpForm/> </p>
                      </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeNewsLetter
