import { Backdrop, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../Constants/header';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { newsNavData } from './newsNavData';
import Error from '../Constants/error';
import { Link } from 'react-router-dom';
import EditButton from '../buttons/editButton';
import DeleteButton from '../buttons/deleteButton';
import Container from 'react-bootstrap/esm/Container';

export const NewsListPage = () => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [pagefound, setPageFound] = useState('');

    const { fetchBunchData } = useApiCalls();


    useEffect(() => {
        let endpoint = 'admin/news'
        fetchBunchData(endpoint, setLoading, setNews, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <Header navData={newsNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>News</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <div className="homeContent">
                                {news.map((value, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <div className="bloghome-parent-div">
                                                <div className="bloghome-child-1">
                                                    <p>ID : {value?._id}</p>
                                                    <Link
                                                        to={`/admin/${value?.slug}`}
                                                    >
                                                        <p>{value?.title}</p>
                                                    </Link>

                                                    <EditButton path={`/admin/news/edit/${value._id}`} />
                                                    <DeleteButton id={value._id} setLoading={setLoading} endpoint={`admin/news/${value._id}`} message="Deleted news Successfull" />
                                                </div>
                                                <div className="bloghome-child-2">
                                                    <div className="image-div">
                                                        <img
                                                            src={value?.Dimage?.url}
                                                            alt="news"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <hr />
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </Container>
            ) : (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}


        </>
    )
}