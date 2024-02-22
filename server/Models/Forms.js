const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Title is required!"],
        },
        email: {
            type: Object,
            required: [true, "Image is required!"]
        },
        phone: {
            type: String,
            required: [true, "Description is required!"],
        },
        company: {
            type: String,
            required: [true, "Link is required!"],
        },
        service: {
            type: String,
            required: [true, "Link is required!"],
        },
    },
    { timestamps: true }
);



const Form = mongoose.model('form', formSchema);

module.exports = Form;