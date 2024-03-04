import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Space, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Header from "./Constants/header";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";
import Error from "./Constants/error";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { navData } from "./blogNavData";
import { Container } from "@mui/material";


const Admin = () => {
  const [blog, setBlog] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [pagefound, setPageFound] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);

  const { Search } = Input;
const { Text } = Typography;

const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  function formatDate(inputDate) {
    console.log(inputDate)
    const dateObject = new Date(inputDate);

    
    // Get date, month name, and year
    const day = dateObject.getDate();
    const monthName1 = dateObject.getMonth()
    const year = dateObject.getFullYear();

   
    
    const month = dateObject.toLocaleString('default', { month: 'short' });
    console.log(month)
    
    // Get the month name based on the month index
    const monthName = month;
    
    return `${day} ${monthName} ${year}`
  }


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
      title: "Title",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title", "Title"),
      render: (text, record) => (
        <Link to={`/admin/${record.slug}`}>
          {text}
        </Link>
        
      ),
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      ...getColumnSearchProps("slug", "Slug"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps('category', 'Category'),
    },
    {
      title: "Post Date",
      dataIndex: "post_date",
      key: "post_date",
      ...getColumnSearchProps("post_date", "Post Date"),
      render: (text, record) => (
        <span>
          {record.post_date ? (
            record.post_date
          ) : (
            // Assuming createdAt is a valid field in your record
            formatDate(record.createdAt)
          )}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditButton path={`/admin/blog/edit/${record._id}`} />
          <DeleteButton
            id={record._id}
            setLoading={setLoading}
            endpoint={`admin/blog/delete/${record._id}`}
            message="Deleted Blog Successfully"
          />
        </Space>
      ),
    },
  ];

  function getColumnSearchProps(dataIndex, placeholder) {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Search
            placeholder={`Search ${placeholder}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
            enterButton
            ref={(node) => {
              searchInputRef.current = node;
            }}
          />
          <Space>
            <button
              onClick={() => handleReset(clearFilters)}
              style={{ width: 90 }}
            >
              Reset
            </button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) => {
        const formattedDate = record[dataIndex] ? record[dataIndex].toString() : "";
        const createdAt = record.createdAt ? formatDate(record.createdAt).toString() : "";
      
        return (
          formattedDate.toLowerCase().includes(value.toLowerCase()) ||
          createdAt.toLowerCase().includes(value.toLowerCase())
        );
      },
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInputRef.current?.select());
        }
      },
      render: (text) =>
        searchText ? <Text type="success">{text}</Text> : text,
    };
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      setLoading(true);
      const data = result.data;
      if (data.length > 0) {
        setBlog(data);
        setFilteredBlog(data);
        setTotalRows(data.length);
      } else {
        setPageFound("Notfound");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let API = "http://3.6.159.57:8000//admin/admin";
    fetchBlog(API);
  }, []);

  return (
    <>
    <div class="custom-cursor__cursor" style={{transform: 'translate3d(calc(492px - 50%), calc(172px - 50%), 0px)'}}></div>
    <div class="custom-cursor__cursor-two" style={{left: '591px', top: '181px'}}></div>
      <Header navData={navData} />
      {loading ? (
        <Container>
          <div>
        <h3>Blogs</h3>
        {pagefound === "Notfound" ? (
              <Error />
            ) : (
        <Table 
          dataSource={filteredBlog} 
          columns={columns} 
          resizeable 
          onChange={handleTableChange}
          pagination={{ current: currentPage, pageSize: pageSize }} />
          )}
          </div>
        </Container>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Admin;
