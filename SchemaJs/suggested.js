const mongoose = require('mongoose');

const SuggestedSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        img: String,
        status: String,
    },
    {
        collection: 'suggested',
        skipVersioning: true,
    }
)

const Suggested = new mongoose.model('Suggested', SuggestedSchema)

module.exports = {Suggested}