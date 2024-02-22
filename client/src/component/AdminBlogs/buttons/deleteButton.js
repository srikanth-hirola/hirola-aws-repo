// import axios from 'axios';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import { useApiCalls } from '../../../Hooks/useApiCalls';

// const DeleteButton = ({ id, setLoading, endpoint, message }) => {
//   const { deleteData } = useApiCalls();
//   const navigate = useNavigate();

//   const remove = async (e) => {
//     e.preventDefault();

//     try {
//       await axios
//         .delete(`https://api.hirolainfotech.com/admin/blog/delete/${id}`)
//         .then(() => {
//           console.log('Deletion Success');
//           window.location.reload(false);
//           navigate('/admin');
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <>
//       <Button type="button" variant="outline-danger" onClick={(e) => deleteData(e, setLoading, endpoint, message)}>
//         Delete
//       </Button>
//     </>
//   );
// };

// export default DeleteButton;




import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import axios from 'axios';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DeleteButton = ({ id, setLoading, endpoint, message, redirectPath }) => {
  const { deleteData } = useApiCalls();
  const navigate = useNavigate();
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const showConfirmation = () => {
    setIsConfirmationVisible(true);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
  };

  const remove = async () => {
    try {
      setLoading(true);
      await axios.delete(`https://api.hirolainfotech.com/${endpoint}`);
      console.log('Deletion Success');
      toast.success("Deleted Successfully");
      setLoading(false);
      // deleteData(endpoint, message); // Assuming this function updates the state after deletion
      // if (redirectPath) {
      //   navigate(redirectPath);
      // }
      window.location.reload()
    } catch (error) {
      console.error('Error deleting:', error);
      setLoading(false);
    } finally {
      setIsConfirmationVisible(false);
    }
  };

  return (
    <>
      <Button type="button" variant="outline-danger"  onClick={showConfirmation}>
        Delete
      </Button>

      <Modal
        title="Confirm Deletion"
        open={isConfirmationVisible}
        onOk={remove}
        onCancel={handleCancel}
        okText="Yes, Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete?</p>
      </Modal>
    </>
  );
};

export default DeleteButton;

