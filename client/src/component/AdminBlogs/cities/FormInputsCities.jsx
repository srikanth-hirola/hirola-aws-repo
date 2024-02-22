import React from 'react'
import Form from 'react-bootstrap/Form';
import { useHandleChange } from '../../../Hooks/useHandleChange';

export const FormInputsCities = ({ city, setCity }) => {
    const { handleDataChange, handleSingleImageChange } = useHandleChange();

    return (
        <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control
                    name="cityName"
                    value={city?.cityName}
                    onChange={(e) => handleDataChange(e, city, setCity)}
                    type="text"
                    placeholder="Enter city Name"
                    required
                />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    size="lg"
                    name="Dimage"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleSingleImageChange(e, 'Dimage', city, setCity,)}
                />
                <div className='blog-post-image-formInput-parent'>
                    {city?.Dimage && <div className='blog-post-image-formInput'>
                        <img src={city?.Dimage?.public_id ? city?.Dimage?.url : city?.Dimage} alt='blog-post' />
                    </div>}
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => handleDataChange(e, city, setCity)} name='Address' value={city?.Address} />
            </Form.Group>
            <br />
        </div>
    )
}
