import React from 'react'
import Form from 'react-bootstrap/Form';
import { useHandleChange } from '../../../Hooks/useHandleChange';

export const FormInputsClients = ({ client, setClient }) => {
    const { handleDataChange, handleSingleImageChange } = useHandleChange();

    return (
        <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>client</Form.Label>
                <Form.Control
                    name="clientName"
                    value={client?.clientName}
                    onChange={(e) => handleDataChange(e, client, setClient)}
                    type="text"
                    placeholder="Enter Client Name"
                    required
                />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Client Image</Form.Label>
                <Form.Control
                    type="file"
                    size="lg"
                    name="Dimage"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleSingleImageChange(e, 'Dimage', client, setClient,)}
                />
                <div className='blog-post-image-formInput-parent'>
                    {client?.Dimage && <div className='blog-post-image-formInput'>
                        <img src={client?.Dimage?.public_id ? client?.Dimage?.url : client?.Dimage} alt='blog-post' />
                    </div>}
                </div>
            </Form.Group>
            <br />
        </div>
    )
}
