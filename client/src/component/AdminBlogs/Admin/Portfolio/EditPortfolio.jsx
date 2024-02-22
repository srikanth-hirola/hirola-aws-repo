import React, { useEffect, useState } from 'react'
import Header from '../Constants/header'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import { portfolioNavData } from './portfolioNavData';
import Button from 'react-bootstrap/esm/Button';
import { FormInputsPortfolio } from './FormInputsPortfolio';
import { useParams } from 'react-router-dom';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from '../Constants/footer';
import Error from '../Constants/error';

export const EditPortfolio = () => {
    const [portfolio, setPortfolio] = useState(null);
    const { fetchSingleData, updateData } = useApiCalls();
    const { id } = useParams();
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);

    const endpoint = 'admin/portfolioCategory'

    useEffect(() => {
        let fetchEndpoint = `admin/portfolio/${id}`;
        fetchSingleData(fetchEndpoint, setLoading, setPageFound, setPortfolio)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            <Header navData={portfolioNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>Portfolio Form</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <Form>
                                <FormInputsPortfolio portfolio={portfolio} setPortfolio={setPortfolio} endpoint={endpoint} />
                                <Button
                                    variant="outline-primary"
                                    className="update_button"
                                    type="submit"
                                    name="sub"
                                    onClick={(e) => updateData(e, portfolio, setLoading, `admin/portfolio/${id}`, '/admin/portfolio', "Updated Portfolio Successfully!")}
                                >
                                    Update Portfolio
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
