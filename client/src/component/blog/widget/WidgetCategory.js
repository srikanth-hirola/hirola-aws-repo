import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { flatDeep, slugify, containsObject } from '../../../utils';
import axios from 'axios';


const WidgetCategory = ({ blogs }) => {

  const [blog, setBlog] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [pagefound, setPageFound] = useState("");

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
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
    let API = "http://3.6.159.57:8000/admin/admin/categories";
    fetchBlog(API);
  }, []);

  const cats = blog?.map(data => {
    return data.category;
  });


  let singleCatArray = flatDeep(cats);
  let categories = [];
  singleCatArray.forEach(cat => {
    const obj = {
      title: cat.trim(),
      slug: slugify(cat),
      count: 1
    }
    const objIndex = containsObject(obj, categories);
    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;
      categories[objIndex] = {
        title: cat.trim(),
        slug: slugify(cat),
        count: prevCount + 1
      }
    } else {
      categories.push(obj);
    }
  })

  return (
    <ul className="category-list list-unstyled">
      {categories.map((data) => (
        <li key={data.slug}>
          <Link to={process.env.PUBLIC_URL + `/category/${data.slug}`}>{data.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default WidgetCategory;