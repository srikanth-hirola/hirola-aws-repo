import React from 'react'
import jwellRollData from '../../../data/products/jewewlerySoftware.json';
import Accordion from 'react-bootstrap/Accordion';
// import FaqOne from '../../component/faq/FaqOne'
const rollData = jwellRollData
const KnowMore = () => {
  return (
    <>
{
  rollData.map((jwellData)=>(
    <div className="faq mt--80 mb--80">
        <h3 className='title text-center' >{jwellData.KnowMOre.title}</h3>
        <div className="container">
        <div className="row">
            
            <div className="col-lg-6 col-xl-6 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="0">
                               {
                                jwellData.KnowMOre.knowMoreList.slice(0,3).map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                        {faqData.body.map((data, i) =>(
                                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                                            
                                        ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                               }
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="0">
                               {
                                jwellData.KnowMOre.knowMoreList.slice(3,6).map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                        {faqData.body.map((data, i) =>(
                                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                                            
                                        ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                               }
                            </Accordion>
                        </div>
                    </div>
        
          </div>
        </div>
      </div>
  ))
}
    </>
  )
}

export default KnowMore