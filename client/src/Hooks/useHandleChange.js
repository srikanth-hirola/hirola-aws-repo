import slugify from "react-slugify";
import { toast } from "react-toastify";

export const useHandleChange = () => {

    const handleDataChange = (e, data, setData) => {
        const { value, name } = e.target;
        let updatedState = JSON.parse(JSON.stringify(data));
        updatedState[name] = value;
        setData(updatedState)
    }

    const handleArrayDataChange = (e, index, data, setData) => {
        const { value, name } = e.target;
        let updatedState = JSON.parse(JSON.stringify(data));
        updatedState[name][index] = value;
        setData(updatedState)
    }

    const handleSlugify = (e, data, setData) => {
        e.preventDefault();
        if (!data?.title) {
            alert("Title is required!")
            return;
        }
        const slug = slugify(data?.title);
        setData({ ...data, slug })
    }

    const handleImageDeleteArray = (e, index, data, setData) => {
        e.preventDefault();
        let updatedState = { ...data };
        let images = [...updatedState.large_thumb];
        images.splice(index, 1);
        updatedState.large_thumb = images;
        setData(updatedState);
    };

    const handleAddDataArray = (e, name, state, setState, pushData) => {
        // e.preventDefault();
        let updatedState = JSON.parse(JSON.stringify(state));
        updatedState[name].push(pushData);
        setState(updatedState)
    }

    const handleUnCheckData = (name, state, setState, data) => {
        let updatedState = JSON.parse(JSON.stringify(state));
        updatedState[name] = updatedState[name]?.filter((item) => item !== data);
        setState(updatedState)
    }

    const handleRemoveDataArray = (e, index, name, state, setState) => {
        e.preventDefault();
        let updatedState = JSON.parse(JSON.stringify(state));
        updatedState[name].splice(index, 1);
        setState(updatedState);
    };

    const handleSingleImageChange = (event, name, state, setState) => {
        const file = event.target.files[0];
        const maxSizeInBytes = 200 * 1024; // 200 KB
        if (file) {
            if (file.size <= maxSizeInBytes) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64Image = reader.result;
                    const updatedColorInputs = {
                        ...state
                    };
                    updatedColorInputs[name] = base64Image;
                    setState(updatedColorInputs);
                };
                reader.readAsDataURL(file);
            } else {
                toast.warning(`File "${file.name}" exceeds the size limit of 200 KB.`);
            }
        }
    };

    return { handleDataChange, handleSlugify, handleImageDeleteArray, handleAddDataArray, handleRemoveDataArray, handleArrayDataChange, handleUnCheckData, handleSingleImageChange }
}