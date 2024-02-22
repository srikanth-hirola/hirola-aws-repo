import React, { useEffect, useState } from 'react';
import Header from '../Constants/header';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { formNavData } from './formNavData';
import Error from '../Constants/error';
import { Backdrop, CircularProgress } from '@mui/material';
import Container from 'react-bootstrap/esm/Container';
import { Table, Input } from 'antd';

export const FormData = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [pagefound, setPageFound] = useState('');

  const { fetchBunchData } = useApiCalls();

  useEffect(() => {
    let endpoint = 'admin/form';
    fetchBunchData(endpoint, setLoading, setFormData, setPageFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [query, setQuery] = useState('');

  const search = (data) => {
    console.log(data.email);
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.phone.includes(query)
    );
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => {
        const date = new Date(createdAt);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
  ];

  return (
    <>
      <Header navData={formNavData} />
      {loading ? (
        <Container>
          <div>
            <h1>formData</h1>
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            {pagefound === 'Notfound' ? (
              <Error />
            ) : (
              <div className="homeContent">
                <React.Fragment>
                  <Table
                    columns={columns}
                    dataSource={search(formData)}
                    pagination={{ pageSize: 10 }}
                    // loading={loading}
                    // expandable={{
                    //   expandedRowRender: (record) => (
                    //     <pre>{JSON.stringify(record, null, 2)}</pre>
                    //   ),
                    //   rowExpandable: () => true,
                    // }}
                  />
                </React.Fragment>
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
  );
};
