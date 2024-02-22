const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema(
    {
        cityName: {
            type: String,
            required: [true, "City Name is required!"],
        },
        Dimage: {
            type: Object,
            required: [true, "Image is required!"]
        },
        Address: {
            type: String,
            required: [true, "Address is required!"],
        },
    },
    { timestamps: true }
);



const Cities = mongoose.model('cities', citiesSchema);

module.exports = Cities;