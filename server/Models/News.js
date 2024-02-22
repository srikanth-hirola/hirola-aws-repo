const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
        },
        Dimage: {
            type: Object,
            required: [true, "Image is required!"]
        },
        description: {
            type: String,
            required: [true, "Description is required!"],
        },
        link: {
            type: String,
            required: [true, "Link is required!"],
        },
    },
    { timestamps: true }
);



const News = mongoose.model('news', newsSchema);

module.exports = News;