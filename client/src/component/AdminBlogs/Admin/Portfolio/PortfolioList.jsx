import { Backdrop, CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../Constants/header';
import Error from '../Constants/error';
import { Link } from 'react-router-dom';
import { portfolioNavData } from './portfolioNavData';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import EditButton from '../buttons/editButton';
import DeleteButton from '../buttons/deleteButton';

export const PortfolioList = () => {
    const [loading, setLoading] = useState(false);
    const [portfolio, setportfolio] = useState([]);
    const [pagefound, setPageFound] = useState('');

    const { fetchBunchData } = useApiCalls();


    useEffect(() => {
        let endpoint = 'admin/portfolio'
        fetchBunchData(endpoint, setLoading, setportfolio, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <Header navData={portfolioNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>Portfolios</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <div className="homeContent">
                                {portfolio.map((value, i) => {
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

                                                    <EditButton path={`/admin/portfolio/edit/${value._id}`} />
                                                    <DeleteButton id={value._id} setLoading={setLoading} endpoint={`admin/portfolio/${value._id}`} message="Deleted Portfolio Successfull" />
                                                </div>
                                                <div className="bloghome-child-2">
                                                    <div className="image-div">
                                                        <img
                                                            src={value?.thumb?.url}
                                                            alt="portfolio"
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
