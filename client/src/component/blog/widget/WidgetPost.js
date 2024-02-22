import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const WidgetPost = ({ blogs }) => {

  const location = useLocation();

  const [blog, setBlog] = useState([]);
  const [pagefound, setPageFound] = useState("");

  const [items, setItems] = useState([]);

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      const data = result.data;
      if (data.length > 0) {
        setBlog(data);

      } else {
        setPageFound("Notfound");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (blogs.length > 0) {
      setBlog(blogs.slice(0, 5));

    } else {
      setPageFound("Notfound");
    }
  }, [blogs]);

  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();

    const month = dateObject.toLocaleString('default', { month: 'short' });
    const monthName = month;

    return `${day} ${monthName} ${year}`
  }


  return (
    <div className="post-list-wrap">
      {blog.map((data, index) => (
        <div className="single-post" key={index}>
          <div className="post-thumbnail">
            <Link to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>
              <img src={`${data?.large_thumb[0]?.url}`} loading="lazy" alt="Blog" />
            </Link>
          </div>
          <div className="post-content">
            <h6 className="title">
              <Link to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>
                {data.title}
              </Link>
            </h6>
            <ul className="blog-meta list-unstyled">
              <li>{data?.post_date ? data?.post_date : formatDate(data?.createdAt)}</li>
              <li>{data.read_time}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WidgetPost;


