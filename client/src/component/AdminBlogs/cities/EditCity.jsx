import React, { useEffect, useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { useParams } from 'react-router-dom';
import { citiesNavData } from './citiesNavData';
import Header from '../Constants/header';
import Error from '../Constants/error';
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from '../Constants/footer';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { FormInputsCities } from './FormInputsCities';

export const EditCity = () => {
    const [city, setCity] = useState(null);
    const { fetchSingleData, updateData } = useApiCalls();
    const { id } = useParams();
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let fetchEndpoint = `admin/cities/${id}`;
        fetchSingleData(fetchEndpoint, setLoading, setPageFound, setCity)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <>
            <Header navData={citiesNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>City Form</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (

                            <Form>
                                <FormInputsCities city={city} setCity={setCity} />
                                <Button
                                    variant="outline-primary"
                                    className="update_button"
                                    type="submit"
                                    name="sub"
                                    onClick={(e) => updateData(e, city, setLoading, `admin/cities/${id}`, '/admin/cities', "Updated City Successfully!")}
                                >
                                    Update City
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
