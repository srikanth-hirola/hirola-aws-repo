import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from '../Constants/footer';
import Container from 'react-bootstrap/esm/Container';
import Header from '../Constants/header';
import { teamNavData } from './teamNavData';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { FormInputsTeam } from './FormInputsTeam';
import Error from '../Constants/error';

export const EditTeam = () => {
    const [team, setTeam] = useState(null);
    const { fetchSingleData, updateData } = useApiCalls();
    const { id } = useParams();
    const [pagefound, setPageFound] = useState('');
    const [loading, setLoading] = useState(false);

    const endpoint = 'admin/teamCategory'

    useEffect(() => {
        let fetchEndpoint = `admin/team/${id}`;
        fetchSingleData(fetchEndpoint, setLoading, setPageFound, setTeam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    return (
        <>
            <Header navData={teamNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>Team Form</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <Form>
                                <FormInputsTeam team={team} setTeam={setTeam} endpoint={endpoint} />
                                <Button
                                    variant="outline-primary"
                                    className="update_button"
                                    type="submit"
                                    name="sub"
                                    onClick={(e) => updateData(e, team, setLoading, `admin/team/${id}`, '/admin/team', "Updated Team Member Successfully!")}
                                >
                                    Update Team Member
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
