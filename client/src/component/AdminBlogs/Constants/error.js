import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Page Not Found"
          data-rh="true"
        />
      </Helmet>
      <section className="page_404">
        <Container>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <a href="/" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error;
