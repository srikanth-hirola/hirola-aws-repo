import React, { useEffect, useMemo, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import JoditEditor from 'jodit-react';
import slugify from 'react-slugify';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const FormInputs = ({ blogData, setBlogData, _id }) => {
    const [category, setCategory] = useState('');

    const [categoryDropDown, setCategoryDropDown] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get('http://3.6.159.57:8000/admin/category')
                setCategoryDropDown(data?.categories)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories()
    }, [])

    const editor = useRef(null);

    const config = useMemo(
        () => (
            {
                readonly: false,
                enableDragAndDropFileToEditor: true,
                uploader: {
                    insertImageAsBase64URI: true,
                },
                controls: {
                    font: {
                        list: {
                            'Roboto Medium,Arial,sans-serif': 'Roboto',
                        },
                    },
                },
            }
        ),
        []
    );

    const handleMultipleImages = (e) => {
        const files = e.target.files;
        const updatedState = [];
        const maxSizeInBytes = 200 * 1024; // 200 KB

        const processImage = (file, index) => {
            if (file.size <= maxSizeInBytes) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result;
                    updatedState[index] = base64Image;

                    if (updatedState.filter(Boolean).length === files.length) {
                        let Images = [...blogData?.large_thumb];
                        let concat = Images.concat(updatedState)
                        setBlogData({ ...blogData, large_thumb: concat });
                    }
                };
                reader.readAsDataURL(file);
            } else {
                toast.warning(`File "${file.name}" exceeds the size limit of 200 KB.`);
            }
        };

        for (let i = 0; i < files.length; i++) {
            processImage(files[i], i);
        }
    };

    const handleBlogDataChange = (e) => {
        const { value, name } = e.target;
        let updatedState = JSON.parse(JSON.stringify(blogData));
        updatedState[name] = value;
        setBlogData(updatedState)
    }

    const handleSlugify = (e) => {
        e.preventDefault();
        if (!blogData?.title) {
            alert("Title is required!")
            return;
        }
        const slug = slugify(blogData?.title);
        setBlogData({ ...blogData, slug })
    }

    const handleAddCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://3.6.159.57:8000/admin/category', { category })
            let updatedState = [...categoryDropDown];
            updatedState.push({ category });
            setCategoryDropDown(updatedState)
            toast.success("Added Category successfully")
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
    }

    const handleImageDeleteCloude = (e, id) => {
        e.preventDefault();
        if (window.confirm("uploaded Image will be deleted Permanently!")) {
            handleCloudinaryImageDelete(id, _id)
        }
    }

    const handleCloudinaryImageDelete = async (public_id, _id) => {
        try {
            await axios.delete(`http://3.6.159.57:8000/admin/delete-Img/${public_id}/${_id}`)
            let updatedState = { ...blogData };
            let images = [...updatedState.large_thumb];
            images = images?.filter((image) => image?.public_id !== public_id)
            updatedState.large_thumb = images;
            setBlogData(updatedState);
            toast.success('Image delete successfully!')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const handleImageDeleteArray = (e, index) => {
        e.preventDefault();
        let updatedState = { ...blogData };
        let images = [...updatedState.large_thumb];
        images.splice(index, 1);
        updatedState.large_thumb = images;
        setBlogData(updatedState);
    };


    return (
        <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control
                    name="title"
                    value={blogData.title}
                    onChange={handleBlogDataChange}
                    type="text"
                    placeholder="Blog Title"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>URL slug</Form.Label>
                <Form.Control
                    name="slug"
                    value={blogData.slug}
                    onChange={handleBlogDataChange}
                    type="text"
                    placeholder="URL slug"
                    required
                />
                <Button
                    variant="outline-primary"
                    className="update_button mt-3"
                    type="submit"
                    name="sub"
                    onClick={handleSlugify}
                >Generate</Button>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Meta Title</Form.Label>
                <Form.Control
                    name="metaTitle"
                    value={blogData.metaTitle}
                    onChange={handleBlogDataChange}
                    type="text"
                    placeholder="Meta Title"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Meta Description</Form.Label>
                <Form.Control
                    placeholder="Meta Description"
                    as="textarea"
                    rows={5}
                    name="metaDescription"
                    value={blogData.metaDescription}
                    onChange={handleBlogDataChange}
                    required
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Post Description</Form.Label>
                <Form.Control
                    placeholder="Post Description"
                    as="textarea"
                    rows={5}
                    name="blogDescription"
                    value={blogData.blogDescription}
                    onChange={handleBlogDataChange}
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Read Time</Form.Label>
                <Form.Control
                    name="read_time"
                    value={blogData.read_time}
                    onChange={handleBlogDataChange}
                    type="text"
                    placeholder="Read Time"
                    required
                />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <div className='row'>
                    <div className='col-6'>
                        <select value={blogData?.category} className='category-select-dropDown' name="category" onChange={handleBlogDataChange}>
                            <option value='' disabled>Select a Category</option>
                            {categoryDropDown?.map((category, index) => (
                                <option key={index} value={category?.category}>{category?.category}</option>
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
                            className="update_button btn btn-sm btn-primary"
                            onClick={handleAddCategory}
                        >ADD</button>
                    </div>
                </div>

            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Excerpt</Form.Label>
                <Form.Control
                    name="excerpt"
                    value={blogData.excerpt}
                    onChange={handleBlogDataChange}
                    type="text"
                    placeholder="Excerpt"
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
                    onChange={handleMultipleImages}
                    multiple
                />
                <div className='blog-post-image-formInput-parent'>
                    {blogData?.large_thumb.length > 0 && blogData?.large_thumb?.map((image, index) => (
                        <div className='blog-img-flex' key={index}>
                            <div className='blog-post-image-formInput'>
                                <img src={image?.public_id ? image?.url : image} alt='blog-post' />
                            </div>
                            <button className='delete-btn' onClick={(e) => { image?.public_id ? handleImageDeleteCloude(e, image?.public_id) : handleImageDeleteArray(e, index) }}>
                                <FontAwesomeIcon icon={faTrash} style={{ color: "#e10909", fontSize: "15px" }} />
                            </button>
                        </div>
                    ))}
                </div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Page Content</Form.Label>
                <JoditEditor
                    ref={editor}
                    value={blogData.body}
                    config={config}
                    onBlur={(newContent) => {
                        setBlogData({ ...blogData, body: newContent });
                    }}
                />
            </Form.Group>
        </div>
    )
}
