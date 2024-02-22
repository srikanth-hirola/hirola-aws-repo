import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '../Constants/header';
import EditButton from '../buttons/editButton';
import DeleteButton from '../buttons/deleteButton';
import Error from '../Constants/error';
import { citiesNavData } from './citiesNavData';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { Backdrop, CircularProgress, Container } from '@mui/material';

export const CitiesListPage = () => {
    const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  console.log("cites", filteredCities)
  const [pagefound, setPageFound] = useState('');
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);

  const { Search } = Input;
const { Text } = Typography;

const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

    const { fetchBunchData } = useApiCalls();

    const columns = [
      {
        title: "Index",
        dataIndex: "rowNumber",
        key: "rowNumber",
        render: (text, record, index) => (
          <span>{totalRows - (currentPage - 1) * pageSize - index}</span>
        ),
      },
        {
          title: 'City',
          dataIndex: 'cityName',
          key: 'cityName',
          ...getColumnSearchProps('cityName', 'City'),
          render: (text, record) => (
            <Link to={`/admin/cities/edit/${record._id}`} style={{ display: 'block' }}>
              {text}
            </Link>
          ),
        },
        {
            title: "Address",
            dataIndex: "Address",
            key: "Address",
            ...getColumnSearchProps('Address', 'Address'),
          },
        {
          title: 'Image',
          dataIndex: 'Dimage',
          key: 'Dimage',
          render: (Dimage) => <img src={Dimage?.url} alt="Image" style={{ width: '150px', height: '150px',objectFit:'contain' }} />,
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <EditButton path={`/admin/cities/edit/${record._id}`} />
              <DeleteButton
                id={record._id}
                setLoading={setLoading}
                endpoint={`admin/cities/${record._id}`}
                message="Deleted City Successfully"
              />
            </Space>
          ),
        },
      ];
    
      function getColumnSearchProps(dataIndex, placeholder) {
        return {
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
              <Search
                placeholder={`Search ${placeholder}`}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
                enterButton
                ref={(node) => {
                  searchInputRef.current = node;
                }}
              />
              <Space>
                <button onClick={() => handleReset(clearFilters)} style={{ width: 90 }}>
                  Reset
                </button>
              </Space>
            </div>
          ),
          filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
          onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => searchInputRef.current?.select());
            }
          },
          render: (text) => (searchText ? <Text type="success">{text}</Text> : text),
        };
      }
    
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
      };
    
      const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
      };

      const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
      };


    useEffect(() => {
        let endpoint = 'admin/cities'
        fetchBunchData(endpoint, setLoading, setCities, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setFilteredCities(cities);
        setTotalRows(cities.length)
      }, [cities]);


    return (
        <>
            <Header navData={citiesNavData} />
            {loading ? (
                <Container>
                <div>
                  <h3>Cities</h3>
                  {pagefound === 'Notfound' ? (
                    <Error />
                  ) : (
                    <Table
                      dataSource={filteredCities}
                      columns={columns}
                      resizeable
                      onChange={handleTableChange}
                      pagination={{ current: currentPage, pageSize: pageSize }}
                    />
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