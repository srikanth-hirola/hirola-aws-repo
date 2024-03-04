import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

export const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [cookie, setCookie] = useCookies(['adminBlogCookie']);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })

    const handleFormDataChange = (e) => {
        const { name, value } = e.target;
        let updatedState = { ...formData };
        updatedState[name] = value;
        setFormData(updatedState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://3.6.159.57:8000//admin/login', { formData })

            setCookie('adminBlogCookie', data?.token)
            navigate('/admin')
            toast.success('Logged In Successfully')
        } catch (error) {
            toast.error(e?.response?.data?.message)
        }
    }

    return (
        <div className='login-parent'>
            <div className='login-div'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            name="userName"
                            value={formData?.userName}
                            onChange={handleFormDataChange}
                            type="text"
                            placeholder="Enter UserName"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={formData?.password}
                            onChange={handleFormDataChange}
                            type="password"
                            placeholder="Enter Password"
                            required
                        />

                    </Form.Group>
                    <Button
                        variant="outline-primary"
                        className="update_button mt-3"
                        type="submit"
                        name="sub"
                    >Submit</Button>
                </Form>
            </div>
        </div>
    )
}
