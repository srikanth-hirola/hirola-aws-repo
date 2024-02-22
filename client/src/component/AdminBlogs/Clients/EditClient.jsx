import React, { useEffect, useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { useParams } from 'react-router-dom';
import { clientsNavData } from './clientsNavData';
import Header from '../Constants/header';
import Error from '../Constants/error';
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from '../Constants/footer';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { FormInputsClients } from './FormInputsClients';

export const EditClient = () => {
    const [client, setClient] = useState(null);
    const { fetchSingleData, updateData } = useApiCalls();
    const { id } = useParams();
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let fetchEndpoint = `admin/clients/${id}`;
        fetchSingleData(fetchEndpoint, setLoading, setPageFound, setClient)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <>
            <Header navData={clientsNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>Client Form</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (

                            <Form>
                                <FormInputsClients client={client} setClient={setClient} />
                                <Button
                                    variant="outline-primary"
                                    className="update_button"
                                    type="submit"
                                    name="sub"
                                    onClick={(e) => updateData(e, client, setLoading, `admin/clients/${id}`, '/admin/clients', "Updated Client Successfully!")}
                                >
                                    Update Client
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
