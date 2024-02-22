

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const IsoTwo = () => {
    const [lgShow, setLgShow] = useState(false);
  return (
    <div>
         <Link className='iso-logo' to='' onClick={() => setLgShow(true)}>
                                                 <img className="light-version-logo light-version-logo1" src='/images/iso/iso2015.png' loading="lazy" alt="logo" />
      </Link>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
        
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        {/* <h4>ISO:27001</h4> */}
        <img className="light-version-logo light-version-logo1" src='/images/iso/FINAL-HIROLA(QMS)-1.jpeg' loading="lazy" alt="logo" />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default IsoTwo
