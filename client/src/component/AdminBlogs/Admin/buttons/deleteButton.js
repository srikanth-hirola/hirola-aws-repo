import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useApiCalls } from '../../../Hooks/useApiCalls';

const DeleteButton = ({ id, setLoading, endpoint, message }) => {
  const { deleteData } = useApiCalls();
  const navigate = useNavigate();

  const remove = async (e) => {
    e.preventDefault();

    try {
      await axios
        .delete(`https://api.hirolainfotech.com/admin/blog/delete/${id}`)
        .then(() => {
          console.log('Deletion Success');
          window.location.reload(false);
          navigate('/admin');
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button type="button" variant="outline-danger" onClick={(e) => deleteData(e, setLoading, endpoint, message)}>
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
