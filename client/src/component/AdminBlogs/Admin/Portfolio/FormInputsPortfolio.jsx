import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { useHandleChange } from '../../../Hooks/useHandleChange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const FormInputsPortfolio = ({ portfolio, setPortfolio, endpoint }) => {


    const { handleAddCategory, fetchCategories } = useApiCalls();
    const { handleAddDataArray, handleRemoveDataArray, handleDataChange, handleArrayDataChange, handleUnCheckData, handleSingleImageChange } = useHandleChange();

    useEffect(() => {
        fetchCategories(setCategoryDropDown, endpoint)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [categoryDropDown, setCategoryDropDown] = useState([])
    const [category, setCategory] = useState('');


    return (
        <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    value={portfolio?.title}
                    onChange={(e) => handleDataChange(e, portfolio, setPortfolio)}
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
                    name="thumb"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleSingleImageChange(e, 'thumb', portfolio, setPortfolio,)}
                />
                <div className='blog-post-image-formInput-parent'>
                    {portfolio?.image && <div className='blog-post-image-formInput'>
                        <img src={portfolio?.thumb?.public_id ? portfolio?.thumb?.url : portfolio?.thumb} alt='blog-post' />
                    </div>}
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <div className='row'>
                    <div className='col-6 category-check-parent'>
                        {categoryDropDown?.length > 0 ?
                            categoryDropDown?.map((category, index) => (
                                <div className='category-check-div' key={index}>
                                    <p>{category?.portfolioCategory}</p>
                                    <input type='checkbox' onChange={(e) => portfolio?.category?.includes(category?.portfolioCategory) ? handleUnCheckData('category', portfolio, setPortfolio, category?.portfolioCategory) : handleAddDataArray(e, 'category', portfolio, setPortfolio, category?.portfolioCategory)} name='category' checked={portfolio?.category?.includes(category?.portfolioCategory) ? true : false} />
                                </div>
                            ))
                            : <p>No Category exist!</p>}
                    </div>
                    <div className='col-6 d-flex justify-between gap-2'>
                        <Form.Control
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            placeholder="Add new Category"
                            required
                        />
                        <button
                            variant="outline-primary"
                            className="update_button"
                            onClick={(e) => handleAddCategory(e, categoryDropDown, setCategoryDropDown, category, endpoint, 'portfolioCategory')}
                        >ADD</button>
                    </div>
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Excerpt</Form.Label>
                <Form.Control
                    name="excerpt"
                    value={portfolio?.excerpt}
                    onChange={(e) => handleDataChange(e, portfolio, setPortfolio)}
                    type="text"
                    placeholder="Enter Excerpt"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <div className='d-flex justify-content-between'>
                    <Form.Label>Body</Form.Label>
                    <button
                        variant="outline-primary"
                        className="update_button"
                        onClick={(e) => handleAddDataArray(e, 'body', portfolio, setPortfolio, '')}
                    >ADD</button>
                </div>
                {portfolio?.body?.map((data, index) => (
                    <div className='d-flex gap-2 my-3' key={index}>
                        <Form.Control as="textarea" rows={3} onChange={(e) => handleArrayDataChange(e, index, portfolio, setPortfolio)} name='body' value={portfolio?.body[index]} />
                        <FontAwesomeIcon onClick={(e) => handleRemoveDataArray(e, index, 'body', portfolio, setPortfolio)} icon={faTrash} style={{ color: "#eb0f0f", fontSize: "16px", cursor: "pointer" }} />
                    </div>
                ))}
            </Form.Group>
            <br />
        </div>
    )
}
