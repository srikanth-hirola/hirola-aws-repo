import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BlogGridTwo from '../component/blog/BlogGridTwoo';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import {slugify} from '../utils';
import axios from 'axios';
// import Reveal from 'react-reveal/Reveal';





const BlogArchive = () => {


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

      console.log("blog archive", blog)


    const getBlogData = blog.filter(blog => slugify(blog?.author.author_name) === blogSlug);

    console.log("getblogdata archive", getBlogData)


    

    return (
        <>
        {getBlogData.map((data) => {

        <SEO title={data.author.author_name} />
        })}
       
       <main className="main-wrapper">
           <HeaderOne />
           {/* <Reveal effect="fadeInUp" duration={900}> */}
           <>
           {/* {getBlogData.map((data) => { */}
           <BreadCrumbOne
           title={[...new Set(getBlogData.map((data) => data.author.author_name))].join(', ')}
           page="Blog"
           />
          {/* })} */}
           </>
           <div className="section-padding-equal">
               <div className="container">
                   <div className="row">
                       <BlogGridTwo data={getBlogData} colSize="col-lg-4"/>
                   </div>
               </div>
           </div>
           <CtaLayoutOne />
       <FooterOne parentClass="" />
      {/* </Reveal> */}
       </main>
        </>
    )
}

export default BlogArchive;