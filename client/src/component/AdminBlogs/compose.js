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
      await axios.post('https://api.hirolainfotech.com/admin/compose', { blogData })
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
          <div className='col-md-12 sticky-top'>
          <h1 className='compose-blog-title'>Compose New Blog</h1>
          <Button
              variant="outline-primary"
              className="update_button sticky-top"
              type="submit"
              name="sub"
              onClick={submit}
            >
              Publish
            </Button>
          </div>
          <Form>
            <FormInputs blogData={blogData} setBlogData={setBlogData} />
            
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Compose;
