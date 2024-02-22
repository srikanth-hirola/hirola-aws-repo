import React, {useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function AdminHome() {
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
    },
    {
      name: 'Message',
      selector: (row) => row.msg,
    },
  ];


  const [client, setClient] = useState([]);

  console.log("client", client)

  let API = 'https://admin.onlinemarketingcompany.online/api/clientsdata';

  const fetchUser = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
      if (data.length > 0) {
        setClient(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  const [query, setQuery] = useState('');

  const ExpandRowsComponent=({data})=>{
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }


  const search = (data) => {
    console.log(data.email)
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query)
    );
  };
  return (
    <div className="container mt-5 ">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={search(client)}
        dense
        fixedHeader
        pagination
        fixedHeaderScrollHeight="500px"
        highlightOnHover
        striped 
        expandableRows 
        expandableRowsComponent={ExpandRowsComponent}
      ></DataTable>
      {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <ClientData client={client} />
          </tbody>
        </table> */}
      {/* <DataTable columns={columns} data={records} selectableRows fixedHeader pagination></DataTable> */}
    </div>
  );
}
