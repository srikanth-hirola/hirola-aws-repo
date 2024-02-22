import React, { useEffect, useState } from 'react'
import Header from '../Constants/header';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { formNavData } from './formNavData';
import Error from '../Constants/error';
import { Backdrop, CircularProgress } from '@mui/material';
import Container from 'react-bootstrap/esm/Container';
import DataTable from 'react-data-table-component';

export const FormData = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState([]);
    const [pagefound, setPageFound] = useState('');
    const columns = [
        {
            name: 'ID',
            selector: (row) => row._id,
        },
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
        },
        {
            name: 'Company',
            selector: (row) => row.company,
        },
        {
            name: 'Service',
            selector: (row) => row.service,
        }
    ];


    const ExpandRowsComponent = ({ data }) => {
        return <pre>{JSON.stringify(data, null, 2)}</pre>
    }

    const { fetchBunchData } = useApiCalls();


    useEffect(() => {
        let endpoint = 'admin/form'
        fetchBunchData(endpoint, setLoading, setFormData, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [query, setQuery] = useState('');

    const search = (data) => {
        console.log(data.email)
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(query)
        );
    };

    return (
        <>
            <Header navData={formNavData} />
            {loading ? (
                <Container>
                    <div>
                        <h1>formData</h1>
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {pagefound === 'Notfound' ? (
                            <Error />
                        ) : (
                            <div className="homeContent">
                                {formData.map((value, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <DataTable
                                                columns={columns}
                                                data={search(formData)}
                                                dense
                                                fixedHeader
                                                pagination
                                                fixedHeaderScrollHeight="500px"
                                                highlightOnHover
                                                striped
                                                expandableRows
                                                expandableRowsComponent={ExpandRowsComponent}
                                            ></DataTable>
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
