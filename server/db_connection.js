const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose
        // .connect('mongodb+srv://Admin-dinesh:Dinesh@cluster0.l1qq8e4.mongodb.net/hblogdb', {
        .connect('mongodb+srv://srikanthhirola:KVdvdHRjamFaHg4J@cluster0.sqxiau4.mongodb.net/hirola-info', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('DB Connected');
        })
        .catch((error) => {
            console.error('DB Connection failed:', error);
        });
}

module.exports = dbConnection;






