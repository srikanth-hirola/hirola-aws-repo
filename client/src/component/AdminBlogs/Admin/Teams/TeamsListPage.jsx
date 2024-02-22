import React, { useEffect, useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { Backdrop, CircularProgress } from '@mui/material';
import Header from '../Constants/header';
import Container from 'react-bootstrap/esm/Container';
import Error from '../Constants/error';
import { Link } from 'react-router-dom';
import EditButton from '../buttons/editButton';
import DeleteButton from '../buttons/deleteButton';
import { teamNavData } from './teamNavData';

export const TeamsListPage = () => {
    const [loading, setLoading] = useState(false);
    const [team, setTeam] = useState([]);
    const [pagefound, setPageFound] = useState('');

    const { fetchBunchData } = useApiCalls();


    useEffect(() => {
        let endpoint = 'admin/team'
        fetchBunchData(endpoint, setLoading, setTeam, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <Header navData={teamNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>Team</h1>
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <div className="homeContent">
                                {team.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="bloghome-parent-div">
                                                <div className="bloghome-child-1">
                                                    <p>ID : {value?._id}</p>
                                                    <Link
                                                        to={`/admin/${value?.slug}`}
                                                    >
                                                        <p>{value?.title}</p>
                                                    </Link>

                                                    <EditButton path={`/admin/team/edit/${value._id}`} />
                                                    <DeleteButton id={value._id} setLoading={setLoading} endpoint={`admin/team/${value._id}`} message="Deleted team Successfull" />
                                                </div>
                                                <div className="bloghome-child-2">
                                                    <div className="image-div">
                                                        <img
                                                            src={value?.thumb?.url}
                                                            alt="team"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <hr />
                                        </div>
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
