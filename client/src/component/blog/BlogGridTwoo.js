import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const BlogGridTwoo = ({ data, colSize }) => {
console.log("catdata",data)
  function formatDate(inputDate) {
    console.log(inputDate)
    const dateObject = new Date(inputDate);


    // Get date, month name, and year
    const day = dateObject.getDate();
    const monthName1 = dateObject.getMonth()
    const year = dateObject.getFullYear();



    const month = dateObject.toLocaleString('default', { month: 'short' });
    console.log(month)

    // Get the month name based on the month index
    const monthName = month;

    // console.log(`${day} ${month} ${year}`)
    // Return the formatted result
    return `${day} ${monthName} ${year}`
  }

  return (
    <>
      {data.map((blog) => (
        <div className={colSize} key={blog.id}>
          <div className="blog-grid blog-grid-2">
            <div className="post-thumbnail">
              <Link
                to={process.env.PUBLIC_URL + `/blog/${blog?.slug}`}
              >
                <img
                  //   src={`${process.env.PUBLIC_URL}/${blog.thumb.url}`}
                  src={`${Array.isArray(blog.thumb) ? blog.large_thumb[0].url : blog.large_thumb[0].url}`}
                  loading="lazy"
                  alt="Blog"
                />
              </Link>

            </div>
            <div className="author">
              <div className="info">
                <h6 className="author-name">{blog?.author.author_name}</h6>
                <ul className="blog-meta list-unstyled">
                  <li>{blog?.createdAt ? formatDate(blog?.createdAt) : blog?.post_date}</li>
                  <li>{blog.read_time}</li>
                </ul>
              </div>
            </div>
            <h5 className="title">
              <Link
                to={process.env.PUBLIC_URL + `/blog/${blog.slug}`}
              >
                {blog.title}
              </Link>
            </h5>
            <p>{blog.excerpt}</p>
            <Link
              className="axil-btn btn-borderd"
              to={process.env.PUBLIC_URL + `/blog/${blog.slug}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogGridTwoo;
