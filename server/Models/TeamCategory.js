const mongoose = require('mongoose');

const teamCategorySchema = new mongoose.Schema(
    {
        teamCategory: String
    }
)

const TeamCategory = mongoose.model('teamCategory', teamCategorySchema);

module.exports = TeamCategory;