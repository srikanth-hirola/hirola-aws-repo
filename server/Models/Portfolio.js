const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
        },
        category: {
            type: Array,
            required: [true, "categories are required!"]
        },
        excerpt: {
            type: String,
            required: [true, "Excerpt is required!"],
        },
        thumb: {
            type: Object,
            required: [true, "Image is required!"]
        },
        body: {
            type: Array,
            required: [true, "Page Content required!"],
        },
    },
    { timestamps: true }
);



const Portfolio = mongoose.model('portfolio', portfolioSchema);

module.exports = Portfolio;