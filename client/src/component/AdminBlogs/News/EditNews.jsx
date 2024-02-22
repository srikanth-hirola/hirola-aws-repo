import React, { useEffect, useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { useParams } from 'react-router-dom';
import { newsNavData } from './newsNavData';
import Header from '../Constants/header';
import Error from '../Constants/error';
import { FormInputsNews } from './FormInputsNews';
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from '../Constants/footer';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export const EditNews = () => {
    const [news, setNews] = useState(null);
    const { fetchSingleData, updateData } = useApiCalls();
    const { id } = useParams();
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let fetchEndpoint = `admin/news/${id}`;
        fetchSingleData(fetchEndpoint, setLoading, setPageFound, setNews)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <>
            <Header navData={newsNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>news Form</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (

                            <Form>
                                <FormInputsNews news={news} setNews={setNews} />
                                <Button
                                    variant="outline-primary"
                                    className="update_button"
                                    type="submit"
                                    name="sub"
                                    onClick={(e) => updateData(e, news, setLoading, `admin/news/${id}`, '/admin/news', "Updated News Successfully!")}
                                >
                                    Update News
                                </Button>
                            </Form>
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
            <Footer />
        </>
    )
}
