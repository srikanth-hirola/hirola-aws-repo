import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { FaPlay, FaAngleRight, FaAngleLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FsLightbox from 'fslightbox-react';
import Slider from "react-slick";
import ReactPaginate from 'react-paginate';
import axios from 'axios';


const BlogGridOne = ({ blogsLength }) => {
    const [blogs, setBlog] = useState([]);
    const [pagefound, setPageFound] = useState("");

    const [toggler, setToggler] = useState(false);
    let API = "http://3.6.159.57:8000/admin/admin/pagination";


    const fetchBlog = async (url, pageNum) => {
        try {
            const result = await axios.get(`${url}?page=${pageNum}&limit=${8}`);
            const data = result.data;
            if (data?.length > 0) {
                setBlog(data);
            } else {
                setPageFound("Notfound");
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log(blogs)
    }, [blogs])

    useEffect(() => {
        fetchBlog(API, 1);
    }, [API]);

    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}><FaAngleRight /></div>
        );
    }

    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}><FaAngleLeft /></div>
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
    }

    // const [blogs] = useState(allBlogData);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState();

    const blogsPerPage = 8;

    useEffect(() => {
        const pageCountData = Math.ceil(blogsLength / blogsPerPage);
        setPageCount(pageCountData)
    }, [blogsLength])


    const changePage = ({ selected }) => {
        let pgNum = selected + 1;
        fetchBlog(API, pgNum)
        setPageNumber(pgNum);
    }


    // const fetchBlog = async (url) => {
    //     try {
    //         const result = await axios.get(url);
    //         const data = result.data;
    //         if (data.length > 0) {
    //             setBlog(data);
    //         } else {
    //             setPageFound("Notfound");
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     let API = "http://3.6.159.57:8000/admin/admin";
    //     fetchBlog(API);
    // }, []);


    function formatDate(inputDate) {
        const dateObject = new Date(inputDate);
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();

        const month = dateObject.toLocaleString('default', { month: 'short' });
        const monthName = month;

        return `${day} ${monthName} ${year}`
    }


    return (
        <>
            {
                blogs?.length > 0 ?
                    blogs?.map((data) => (
                        <div className="blog-grid" key={data.id}>
                            <h3 className="title">
                                {/* <Link to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>{data.title}</Link> */}
                                <Link to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>{data.title}</Link>
                            </h3>
                            <div className="author">
                                <div className="author-thumb">
                                    <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1702638627/logo_dvdzrb.svg" loading="lazy" alt="Blog Author" className='aathr' />
                                </div>
                                <div className="info">
                                    <h6 className="author-name">
                                        <Link to={process.env.PUBLIC_URL + `/archive/${slugify(data?.author?.author_name)}`}>{data?.author?.author_name}</Link>
                                    </h6>
                                    <ul className="blog-meta list-unstyled">
                                        <li>{data?.createdAt ? formatDate(data?.createdAt) : data?.post_date}</li>
                                        <li>{data?.read_time}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-thumbnail">
                                {
                                    Array.isArray(data?.large_thumb) ? (
                                        <Slider {...slideSettings} className="slick-arrow-nav">
                                            {data?.large_thumb.map((thumbData, index) => (
                                                <div className="slide-item" key={index}>
                                                    <img src={thumbData?.url} loading="lazy" alt="Blog" />
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <Link to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>
                                            <img src={data?.large_thumb?.url} loading="lazy" alt="Blog" />
                                        </Link>
                                    )
                                }

                                {data.format === "video" ?
                                    <>
                                        <div className="popup-video">
                                            <button className="play-btn" onClick={() => setToggler(!toggler)}><FaPlay /></button>
                                        </div>
                                        <FsLightbox toggler={toggler} sources={['https://www.youtube.com/watch?v=1iIZeIy7TqM']} />
                                    </>
                                    : ""
                                }
                            </div>
                            <p>{data.excerpt}</p>
                            <Link className="axil-btn btn-borderd btn-large" to={process.env.PUBLIC_URL + `/blog/${data?.slug}`}>Read More</Link>
                        </div>
                    ))
                    : <p>Loading...</p>
            }

            <ReactPaginate
                previousLabel={<FaArrowLeft />}
                nextLabel={<FaArrowRight />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination justify-content-start"}
                previousLinkClassName={"prev"}
                nextLinkClassName={"next"}
                disabledClassName={"disabled"}
                activeClassName={"current"}
            />
        </>
    )
}

export default BlogGridOne;
