import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { backend_url } from '../../backend_url';

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const BlogFormTwo = () => {
  const form = useRef();

  // ----------------------------------------------
  const [result, showresult] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);

  const [nameError, setError] = useState(false);

  const API = backend_url

  const submit = async (e) => {
    e.preventDefault();
    const nameVer = NameVali(name, email, phone, company, service);
    if (nameVer) {
      try {
        setLoading(true); // Set loading to true when the form is being submitted

        const result = await axios.post(`${API}/admin/form`, {
          name,
          email,
          phone,
          company,
          service,
        });

        if (result.data.Status === 'Success') {
          showresult(true);
        }
      } catch (error) {
        alert('Failed to submit form');
      } finally {
        setLoading(false); // Set loading back to false when the response is received
      }
    }
  };

  const NameVali = (name, email, phone, company, service) => {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      company === '' ||
      service === ''
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  return (
   <>
     
    <form ref={form} className="axil-contact-form service-form-one">
    {/* <div className="blog-form-enquiry">
        <h4>Enquire Now</h4>
    </div> */}
      <div className="form-group">
        <label>
          Name<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="contact-name"
          placeholder="John Smith"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>
          Email<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="email"
          className="form-control"
          name="contact-email"
          placeholder="example@mail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>
          Phone<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="tel"
          className="form-control"
          name="contact-phone"
          placeholder="+123456789"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group ">
        <label>
          Company<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          name="contact-phone"
          placeholder="Company Name"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>
          Service<span style={{ color: 'red' }}>*</span>
        </label>
        <Form.Select
          placeholder="Choose Your Service"
          className="form-control"
          onChange={(e) => {
            setService(e.target.value);
          }}
          name="service-drop"
          id="cars"
          required
        >
          <option disabled selected hidden>
            Choose Your Service
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Web Development">Web Development</option>
          <option value="Branding">Branding</option>
          <option value="Inflight Advertising">Inflight Advertising</option>
           <option value="Press Release">Press Release</option>
        </Form.Select>
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I Agree To The Terms And Conditions.
  </label>
</div>
      {nameError ? (
        <p style={{ color: 'red' }}>
          <i>All Fields must be filled!</i>
        </p>
      ) : null}
      
      {/* <div className="form-group">
        <button
          // type="submit"
          onClick={submit}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          Get Free Quote
        </button>
      </div> */}
      {loading ? (
        <div className="form-group">
        <button
          // onClick={submit}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
          // disabled={loading} // Disable the button when loading is true
        >
          Loading....
        </button>
      </div>
      ) : (
        <div className="form-group">
          <button
            onClick={submit}
            className="axil-btn btn-fill-primary btn-fluid btn-primary"
            name="submit-btn"
            disabled={loading} // Disable the button when loading is true
          >
            Get Free Quote
          </button>
        </div>
      )}
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
   </>
  );
};

export default BlogFormTwo;