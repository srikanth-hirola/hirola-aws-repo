import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Constants/header';
import Footer from './Constants/footer';
import EditButton from './buttons/editButton';
import Error from './Constants/error';
import { sanitize } from 'dompurify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/Container';
// import DeleteButton from './buttons/deleteButton';

const Blog = () => {
  const slug = useParams();
  const slugURL = slug.publish;
  const [blogPage, setBlogPage] = useState([]);
  const [pagefound, setPageFound] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let API = `http://3.6.159.57:8000//admin/blog/${slugURL}`;

  const fetchBlog = async (url) => {
    try {
      await axios
        .get(url)
        .then((result) => {
          setLoading(true);
          const data = result.data;
          if (data === '') {
            setPageFound('Notfound');
          } else {
            setBlogPage(data);
          }
        })
        .catch((err) => {
          console.log('Not found the page', err);
          navigate('/admin');
        });
    } catch (e) {
      console.log('Not found the page', e);
      navigate('/admin');
    }
  };

  useEffect(() => {
    fetchBlog(API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const printDate = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* <meta charSet="utf-8" />
          <meta name="description" content={blogPage?.metadescription} />
          <title>{blogPage?.metatitle}</title>
          <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Header />
        {loading ? (
          <div>
            {pagefound === 'Notfound' ? (
              <Error />
            ) : (
              <Container>
                <div className="blogPage blogPageAdmin">
                  <h3>Admin Blog Page</h3>
                  <h1>{blogPage?.title}</h1>
                  <div className="blogpage-img">
                    {/* <img
                      src={blogPage?.large_thumb[0]?.url}
                      alt="blogpic"
                    /> */}
                  </div>
                  <p>
                    Last Update On: <b>{printDate(blogPage?.updatedAt)}</b> by{' '}
                    {blogPage?.author?.author_name}
                  </p>
                  <EditButton path={`/admin/blog/edit/${blogPage?._id}`} />
                  <br />
                  <p className="blogBody">{blogPage?.blogDescription
                  }</p>
                  <div
                    className="container"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(blogPage?.body),
                    }}
                  />
                </div>
              </Container>
            )}
            ;
          </div>
        ) : (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Blog;
