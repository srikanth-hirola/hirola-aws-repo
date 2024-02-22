import React from 'react'
import Form from 'react-bootstrap/Form';
import { useHandleChange } from '../../../Hooks/useHandleChange';

export const FormInputsNews = ({ news, setNews }) => {
    const { handleDataChange, handleSingleImageChange } = useHandleChange();

    return (
        <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    value={news?.title}
                    onChange={(e) => handleDataChange(e, news, setNews)}
                    type="text"
                    placeholder="Enter Title"
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
                    onChange={(e) => handleSingleImageChange(e, 'Dimage', news, setNews,)}
                />
                <div className='blog-post-image-formInput-parent'>
                    {news?.Dimage && <div className='blog-post-image-formInput'>
                        <img src={news?.Dimage?.public_id ? news?.Dimage?.url : news?.Dimage} alt='blog-post' />
                    </div>}
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Link</Form.Label>
                <Form.Control
                    name="link"
                    value={news?.link}
                    onChange={(e) => handleDataChange(e, news, setNews)}
                    type="text"
                    placeholder="Enter Link"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => handleDataChange(e, news, setNews)} name='description' value={news?.description} />
            </Form.Group>
            <br />
        </div>
    )
}
