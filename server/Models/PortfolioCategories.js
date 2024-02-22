const mongoose = require('mongoose');

const portfolioCategorySchema = new mongoose.Schema(
    {
        portfolioCategory: String
    }
)

const PortfolioCategory = mongoose.model('portfolioCategory', portfolioCategorySchema);

module.exports = PortfolioCategory;