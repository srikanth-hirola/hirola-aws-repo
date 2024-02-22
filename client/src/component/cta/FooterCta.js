import React from 'react';
import HomeData from '../../data/home/homedata.json'
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress } from 'react-icons/fa';
import FormOne from '../contact/FormOne';
import HomeNewsLetter from '../home/HomeNewsLetter';
const allData = HomeData;

const FooterCta = () => {
  return (
    <>
  <section id="news-letter" className='pt--80 pb--80  ' >
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 col-xxl-6">
      {
        allData.map((homeData)=>(
            <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">{homeData.strategy.title}</h3>
                                <p>{homeData.strategy.description}</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                               {
                                homeData.strategy.strategiesOf.map((strategyData)=>(
                                     <Accordion.Item eventKey={strategyData.id}>
                                     <Accordion.Header><FaCompress /> {strategyData.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {strategyData.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))
                               }
                           
                            </Accordion>
                        </div>
        ))
      }
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a Free  Quote</h3>
                            <FormOne />
                        </div>
                    </div>
        </div>
    </div>
    </section>
    <HomeNewsLetter/>
    </>
  )
}

export default FooterCta