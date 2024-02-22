import React, { useEffect, useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import Form from 'react-bootstrap/Form';
import { useHandleChange } from '../../../Hooks/useHandleChange';

export const FormInputsTeam = ({ team, setTeam, endpoint }) => {
    const { handleAddCategory, fetchCategories } = useApiCalls();
    const { handleDataChange, handleSingleImageChange } = useHandleChange();

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
                    value={team?.title}
                    onChange={(e) => handleDataChange(e, team, setTeam)}
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
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => handleSingleImageChange(e, 'thumb', team, setTeam,)}
                />
                <div className='blog-post-image-formInput-parent'>
                    {team?.thumb && <div className='blog-post-image-formInput'>
                        <img src={team?.thumb?.public_id ? team?.thumb?.url : team?.thumb} alt='blog-post' />
                    </div>}
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <div className='row'>
                    <div className='col-6'>
                        <select value={team?.teamCategory} className='category-select-dropDown' name="category" onChange={(e) => handleDataChange(e, team, setTeam)}>
                            <option value='' disabled>Select a Category</option>
                            {categoryDropDown?.map((category, index) => (
                                <option key={index} value={category?.teamCategory}>{category?.teamCategory}</option>
                            ))}
                        </select>
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

                            onClick={(e) => handleAddCategory(e, categoryDropDown, setCategoryDropDown, category, endpoint, 'teamCategory')}
                        >ADD</button>
                    </div>
                </div>

            </Form.Group>

            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                    name="designation"
                    value={team?.designation}
                    onChange={(e) => handleDataChange(e, team, setTeam)}
                    type="text"
                    placeholder="Enter designation"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => handleDataChange(e, team, setTeam)} name='description' value={team?.description} />
            </Form.Group>
            <br />
        </div>
    )
}
