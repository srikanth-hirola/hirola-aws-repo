const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema(
    {
        clientName: {
            type: String,
            required: [true, "Client Name is required!"],
        },
        Dimage: {
            type: Object,
            required: [true, "Image is required!"]
        },
    },
    { timestamps: true }
);



const Clients = mongoose.model('clients', clientsSchema);

module.exports = Clients;