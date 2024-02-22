import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Input, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Header from '../Constants/header';
import EditButton from '../buttons/editButton';
import DeleteButton from '../buttons/deleteButton';
import Error from '../Constants/error';
import { teamNavData } from './teamNavData';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { Backdrop, CircularProgress, Container } from '@mui/material';

export const TeamsListPage = () => {
    const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
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
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          ...getColumnSearchProps('title', 'Title'),
          render: (text, record) => (
            <Link to={`/admin/${record.slug}`} style={{ display: 'block' }}>
              {text}
            </Link>
          ),
        },
        {
          title: "Category",
          dataIndex: "category",
          key: "category",
          ...getColumnSearchProps('category', 'Category'),
        },
        {
            title: 'Thumbnail',
            dataIndex: 'thumb',
            key: 'thumb',
            render: (thumb) => <img src={thumb.url} alt="Thumbnail" style={{ width: '65%', height: '168px' }} />,
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <EditButton path={`/admin/team/edit/${record._id}`} />
              <DeleteButton
                id={record._id}
                setLoading={setLoading}
                endpoint={`admin/team/${record._id}`}
                message="Deleted Team Successfully"
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
        let endpoint = 'admin/team'
        fetchBunchData(endpoint, setLoading, setTeam, setPageFound);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setFilteredTeam(team);
        setTotalRows(team.length)
      }, [team]);


    return (
        <>
            <Header navData={teamNavData} />
            {loading ? (
                <Container>
                <div>
                  <h3>Team</h3>
                  {pagefound === 'Notfound' ? (
                    <Error />
                  ) : (
                    <Table
                      dataSource={filteredTeam}
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
