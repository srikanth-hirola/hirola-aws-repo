import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useApiCalls = () => {
    const navigate = useNavigate();
    // const url = 'http://3.6.159.57:8000/';
    const url = 'http://3.6.159.57:8000/';

    const handleImageDeleteCloude = (e, id, _id) => {
        e.preventDefault();
        if (window.confirm("uploaded Image will be deleted Permanently!")) {
            handleCloudinaryImageDelete(id, _id)
        }
    }

    const handleCloudinaryImageDelete = async (public_id, _id, data, setData) => {
        try {
            await axios.delete(`${url}admin/delete-Img/${public_id}/${_id}`)
            let updatedState = { ...data };
            let images = [...updatedState.large_thumb];
            images = images?.filter((image) => image?.public_id !== public_id)
            updatedState.large_thumb = images;
            setData(updatedState);
            toast.success('Image delete successfully!')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const handleAddCategory = async (e, dropData, setDropData, category, endpoint, name) => {
        e.preventDefault();
        try {
            await axios.post(`${url}${endpoint}`, { [name]: category })
            let updatedState = [...dropData];
            updatedState.push({ [name]: category });
            setDropData(updatedState)
            toast.success("Added Category successfully")
        } catch (e) {
            toast.error(e?.response?.data?.message);
        }
    }

    const fetchCategories = async (setDropDown, endpoint) => {
        try {
            const { data } = await axios.get(`${url}${endpoint}`)
            setDropDown(data?.categories)
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const handleSubmit = async (e, data, endpoint, navPath, message) => {
        e.preventDefault();
        try {
            await axios.post(`${url}${endpoint}`, { data })
            navigate(navPath);
            toast.success(message)
        } catch (e) {
            toast.error(e?.response?.data?.message)
        }
    };

    const fetchSingleData = async (endpoint, setLoading, setPageFound, setData) => {
        try {
            await axios
                .get(`${url}${endpoint}`)
                .then((result) => {
                    setLoading(true);
                    if (result.data === '') {
                        setLoading(true);
                        setPageFound('Notfound');
                    } else {
                        setData({ ...result?.data?.data });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (e) {
            console.log(e);
        }
    };

    const fetchBunchData = async (endpoint, setLoading, setData, setPageFound) => {
        try {
            const result = await axios.get(`${url}${endpoint}`);
            setLoading(true);
            const data = result.data;
            if (data.length > 0) {
                setData(data);
            } else {
                setPageFound('Notfound');
            }
        } catch (e) {
            console.log(e);
        }
    };

    const updateData = async (e, data, setLoading, endpoint, navPath, message) => {
        e.preventDefault();
        setLoading(true)
        try {
            await axios.put(`${url}${endpoint}`, { data })
            navigate(navPath);
            toast.success(message)
            setLoading(false)
        } catch (e) {
            toast.error(e?.response?.data?.message)
            setLoading(false)
        }
    }

    const deleteData = async (e, setLoading, endpoint, message) => {
        e.preventDefault();
        try {
            setLoading(true)
            await axios.delete(`${url}${endpoint}`)
            window.location.reload()
            toast.success(message)
            setLoading(false)
        } catch (e) {
            console.log(e)
            toast.error(e?.response?.data?.message)
            setLoading(false)
        }
    }

    return { deleteData, updateData, handleCloudinaryImageDelete, handleImageDeleteCloude, handleAddCategory, fetchCategories, handleSubmit, fetchSingleData, fetchBunchData }
}