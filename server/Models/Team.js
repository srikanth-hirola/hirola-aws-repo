const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
        },
        category: {
            type: String,
            required: [true, "categories are required!"]
        },
        designation: {
            type: String,
            required: [true, "Excerpt is required!"],
        },
        thumb: {
            type: Object,
            required: [true, "Image is required!"]
        },
        description: {
            type: String,
            required: [true, "Description is required!"],
        },
    },
    { timestamps: true }
);



const Team = mongoose.model('team', teamSchema);

module.exports = Team;