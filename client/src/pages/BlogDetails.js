import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
// import BlogData from "../data/blog/BlogData.json";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import BlogSidebar from "../component/blog/BlogSidebar";
import BlogAuthor from "../component/blog/BlogAuthor";

import { Helmet } from "react-helmet-async";
import { FaPlay, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import BlogListOne from "../component/blog/BlogListOne";
import FooterCta from "../component/cta/FooterCta";
import { slugify } from "../utils";
import axios from "axios";
import { sanitize } from "dompurify";
// import Reveal from 'react-reveal/Reveal';
import FormOne from "../component/contact/FormOne";
import BlogForm from "../component/contact/BlogForm";
import BlogFormTwo from "../component/contact/BlogFormTwo";
// const allBlogData = BlogData;

const BlogDetails = () => {
  // this is for using slug of the blog

  // const params = useParams();
  // const blogId = params.slug;

  // const getBlogData = allBlogData.filter(blog => blog.slug === blogId);
  // const allBlogData = getBlogData[0];

  // this is for using slugify with title of the blog

  const [allBlogData, setBlog] = useState();
  const [pagefound, setPageFound] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const blogSlug = params.slug;

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      setLoading(true);
      const data = result.data;
      if (data) {
        setBlog(data);
      } else {
        setPageFound("Notfound");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    let API = `http://3.6.159.57:8000//${blogSlug}`;
    fetchBlog(API);
  }, [blogSlug]);

  // const getBlogData = allBlogData.filter(
  //   (data) => slugify(data.title) === blogSlug
  // );

  // const detailsBlog = allBlogData;
  const [toggler, setToggler] = useState(false);

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  }
  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  }

  var slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  console.log(allBlogData?.large_thumb[0]?.url)



  return (
    <>
      <Helmet>
        <title>{allBlogData?.metaTitle}</title>
        <meta
          name="description"
          content={allBlogData?.metaDescription}
          data-rh="true"
        />
      </Helmet>

      {allBlogData ? <main className="main-wrapper">
        <HeaderOne />
        {/* <BreadCrumbOne className='breadnew' title={allBlogData?.title} page="Blog" /> */}
        <div className="breadcrum-area bread-new">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                        </li>
                        
                        {/* <Link to={process.env.PUBLIC_URL + "/${url}"}><li className="" dangerouslySetInnerHTML={{__html: page}}></li></Link> */}
                        <li className="active" dangerouslySetInnerHTML={{__html: allBlogData?.title}}></li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-11.png"} loading="lazy" alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} loading="lazy" alt="Line" /></li>
            </ul>
        </div>
        <div className="section-padding-equal sec-new">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      {Array.isArray(allBlogData?.large_thumb) ? (
                        <Slider {...slideSettings} className="slick-arrow-nav">
                          {allBlogData?.large_thumb?.map((data, index) => (
                            <div className="slide-item" key={index}>
                              <img src={data?.url} loading="lazy" alt="Blog" />
                            </div>
                          ))}
                        </Slider>
                      ) : (
                        <img src={allBlogData?.large_thumb[0]?.url} loading="lazy" alt="Blog" />
                      )}

                      {allBlogData?.format === "video" ? (
                        <>
                          <div className="popup-video">
                            <button
                              className="play-btn"
                              onClick={() => setToggler(!toggler)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <FsLightbox
                            toggler={toggler}
                            sources={[
                              "https://www.youtube.com/watch?v=1iIZeIy7TqM",
                            ]}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1702638627/logo_dvdzrb.svg"
                          loading="lazy"
                          alt="Blog Author"
                          className="aathr"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {allBlogData?.author?.author_name}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          {/* <li>{allBlogData?.post_date}</li> */}
                          <li>{allBlogData?.read_time}</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 mb-2">
                      {/* <p>{allBlogData.blogSubDescription}</p> */}
                    </p>
                    {/* <p>{allBlogData.blogDescription}</p> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitize(allBlogData?.body),
                      }}
                    ></div>


                    <div className="row">
                      <div className="col-6">
                        <div className="featured-img">
                          <img
                            src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1701951614/blog-8_iwnpyz.png"
                            loading="lazy"
                            alt="blog"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="featured-img">
                          <img
                            src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1701951615/blog-9_djyuyq.png"
                            loading="lazy"
                            alt="blog"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogAuthor data={allBlogData} />
              </div>
              <div className="col-lg-4">
              <div className="sticky-sidebar">
              <div className="blog-form-one">

         <BlogForm/>
              </div>
                <BlogSidebar />
                 </div>
                 <div className="sticky-form fixed-form">
         <BlogFormTwo/>
       </div>
              </div>
            </div>
          </div>
        </div>

      
        <FooterCta />
        <FooterOne parentClass="" />
     
      </main>
        : <p>Loading...</p>}

    </>
  );
};

export default BlogDetails;
