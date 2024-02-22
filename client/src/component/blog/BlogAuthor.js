import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaDribbble, FaBehance, FaYoutube } from "react-icons/fa";

const BlogAuthor = ({data}) => {
    return (
        <div className="blog-author">
            <div className="author">
                <div className="author-thumb">
                    <img src={process.env.PUBLIC_URL + `${data?.author.author_avatar}`} loading="lazy" alt="Blog Author" />
                </div>
                <div className="info">
                    <h5 className="title">{data?.author.author_name}</h5>
                    <p>{data?.author_para}</p>
                    <ul className="social-share list-unstyled">
                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
                        <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                        <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                        <li><a href="https://www.pinterest.com/"><FaPinterestP /></a></li>
                        <li><a href="https://dribbble.com/"><FaDribbble /></a></li>
                        <li><a href="https://www.behance.net/"><FaBehance /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogAuthor;