import React, { useState } from 'react';
import Header from './Constants/header';
import Footer from './Constants/footer';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import { FormInputs } from './FormInputs';
import axios from 'axios';
import { navData } from './blogNavData';

const Compose = () => {


  const [blogData, setBlogData] = useState({
    title: '',
    metaTitle: '',
    metaDescription: '',
    blogDescription: '',
    read_time: '',
    category: '',
    excerpt: '',
    large_thumb: [],
    body: '',
    slug: ''
  })

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://3.6.159.57:8000//admin/compose', { blogData })
      navigate('/admin');
      toast.success("Published Blog Successfully!")
    } catch (e) {
      toast.error(e?.response?.data?.message)
    }
  };

  return (
    <>
      <Header navData={navData} />
      <Container>
        <div>
          <ToastContainer />
          <h1>Compose New Blog</h1>
          <Form>
            <FormInputs blogData={blogData} setBlogData={setBlogData} />
            <Button
              variant="outline-primary"
              className="update_button"
              type="submit"
              name="sub"
              onClick={submit}
            >
              Publish
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Compose;
