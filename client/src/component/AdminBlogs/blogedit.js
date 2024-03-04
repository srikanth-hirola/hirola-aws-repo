import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Constants/footer';
import Header from './Constants/header';
import Button from 'react-bootstrap/Button';
import Error from './Constants/error';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { FormInputs } from './FormInputs';
import { toast } from 'react-toastify';

const BlogEdit = () => {


  const id = useParams();

  const idURL = id.id;
  const [blogEdit, setBlogEdit] = useState({
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
  });
  const [pagefound, setPageFound] = useState('');
  const [loading, setLoading] = useState(false);


  let API = `http://3.6.159.57:8000//admin/blog/edit/${idURL}`;

  const fetchBlog = async (url) => {
    try {
      await axios
        .get(url)
        .then((result) => {
          setLoading(true);
          if (result.data === '') {
            setLoading(true);
            setPageFound('Notfound');
          } else {
            setBlogEdit({ ...result.data });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBlog(API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -----------------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();

  const update = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.put(`http://3.6.159.57:8000//admin/update/${idURL}`, { blogEdit })
      navigate('/admin');
      toast.success("Updated Blog Successfully!")
      setLoading(false)
    } catch (e) {
      // toast.error(e?.response?.data?.message)
      setLoading(false)
    }

  };

  

  return (
    <>
      <Header />
      {loading ? (
        <Container>
          <div>
            
            {pagefound === 'Notfound' ? (
              <Error />
            ) : (
              <>
            <div className='col-md-12 sticky-top'>
            <h4>Admin Blog Edit Panel</h4>
            <Button
                  variant="outline-primary"
                  className="update_button"
                  type="submit"
                  name="sub"
                  onClick={update}
                >
                  Update
                </Button>
            </div>
              <Form>
                <FormInputs blogData={blogEdit} setBlogData={setBlogEdit} _id={idURL} />
                
              </Form>
              </>
            )}
          </div>
        </Container>
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Footer />
    </>
  );
};

export default BlogEdit;
