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

const FormThree = () => {
  const form = useRef();


  const [result, showresult] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [msg, setMessage] = useState('');
  const [nameError, setError] = useState(false);

  const API = backend_url;

  const submit = async (e) => {
    e.preventDefault();

    const nameVer = NameVali(name, email, phone, company, service);
    if (nameVer) {
      await axios
        .post(`${API}/admin/form`, {
          name,
          email,
          phone,
          company,
          service,
          msg,
        })
        .then((result) => {
          if (result.data.Status === 'Success') {
            showresult(true);
          }
        })
        .catch((e) => {
          alert('Failed to submit form');
        });
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
    <form ref={form} className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
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
        <label>Email</label>
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
        <label>Phone</label>
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
        <label>Company</label>
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
        <label>Service</label>
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
      <div className="form-group mb--40">
        <label>How can we help you?</label>
        <textarea
          name="contact-message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="contact-message"
          className="form-control textarea"
          cols="30"
          rows="3"
        ></textarea>
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
      <div className="form-group text-end">
        <button
          type="submit"
          onClick={submit}
          className="axil-btn btn-fill-primary w-auto btn-primary"
          name="submit-btn"
        >
          SEND
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormThree;