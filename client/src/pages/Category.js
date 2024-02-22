import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BlogGridTwoo from '../component/blog/BlogGridTwoo';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import {slugify} from '../utils';
import FooterCta from '../component/cta/FooterCta';
import axios from 'axios';
// import Reveal from 'react-reveal/Reveal';



const BlogCategory = () => {

    const params = useParams();
    const blogSlug = params.slug;

    const [blog, setBlog] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [pagefound, setPageFound] = useState("");
  const [loading, setLoading] = useState(false);

    const fetchBlog = async (url) => {
        try {
          const result = await axios.get(url);
          setLoading(true);
          const data = result.data;
          if (data.length > 0) {
            setBlog(data);
            setFilteredBlog(data);
          } else {
            setPageFound("Notfound");
          }
        } catch (e) {
          console.log(e);
        }
      };
    
      useEffect(() => {
        let API = "https://api.hirolainfotech.com/admin/admin";
        fetchBlog(API);
      }, []);

    const getBlogData = blog.filter(blog => slugify(blog.category) === blogSlug);

    console.log("category Blogs", getBlogData)

    return (
        <>
        <SEO title="Category" />
       
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Category"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                        <div className="row">
                            <BlogGridTwoo data={getBlogData} colSize="col-lg-4"/>
                        </div>
                    </div>
                </div>
                <FooterCta/>
            <FooterOne parentClass="" />
           {/* </Reveal> */}
            </main>
        </>
    )
}

export default BlogCategory;