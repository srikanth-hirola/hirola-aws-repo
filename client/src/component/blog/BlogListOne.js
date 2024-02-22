import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { slugify } from '../../utils';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const BlogListOne = ({colSize, itemShow}) => {

    const [blog, setBlog] = useState([]);
  const [pagefound, setPageFound] = useState("");
  const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);
    const location = useLocation();
  
    // Your array of 32 items
  
    // Function to get random items
    // const getRandomItems = () => {
    //   const randomItems = [];
  
    //   while (randomItems.length < 4) {
    //     const randomIndex = Math.floor(Math.random() * blog.length);
    //     const randomItem = blog[randomIndex];

    //     console.log("random index", randomIndex)
  
    //     if (!randomItems.includes(randomItem)) {
    //       randomItems.push(randomItem);
    //     }
    //   }
  
    //   setItems(randomItems);
    // };
  
    // // Call getRandomItems when the location changes
    // useEffect(() => {
    //   getRandomItems();
    // }, [location]);


    const fetchBlog = async (url) => {
        try {
          const result = await axios.get(url);
          setLoading(true);
          const data = result.data;
          if (data.length > 0) {
            setBlog(data);
            // getRandomItems();
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

    return (
        <>
            {items.map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) }`}>
                        <div className="post-thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                                <img src={`${data.large_thumb[0].url}`} loading="lazy" alt="Blog Post" />
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`} className="more-btn">
                                Learn more <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;