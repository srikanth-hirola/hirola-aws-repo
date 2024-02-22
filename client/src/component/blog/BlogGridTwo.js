import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';


const BlogGridTwo = ({data, colSize}) => {


    return (
        <>
            {data.map((blog) => (
                <div className={colSize} key={blog.id}>
                    <div className="blog-grid blog-grid-2">
                        <div className="post-thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(blog.title)}`}><img src={`${process.env.PUBLIC_URL}/${blog.thumb}`} loading="lazy" alt="Blog" /></Link>
                        </div>
                        <div className="author">
                            <div className="info">
                                <h6 className="author-name">{blog.author_name}</h6>
                                <ul className="blog-meta list-unstyled">
                                    <li>{blog.post_date}</li>
                                    <li>{blog.read_time}</li>
                                </ul>
                            </div>
                        </div>
                        <h5 className="title">
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(blog.title)}`}>{blog.title}</Link>
                        </h5>
                        <p>{blog.excerpt}</p>
                        <Link className="axil-btn btn-borderd" to={process.env.PUBLIC_URL + `/blog/${slugify(blog.title)}`}>Read More</Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogGridTwo;