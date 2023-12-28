const mongoose = require('mongoose');

//creating mongodb schema
const Player = mongoose.Schema({
    name: {
        type: String,
        maxLength: [15, "Player name cannot exceed 15 characters"],
        required: [true, "Player name cannot be empty"]
    },
    country: {
        type: String,
        maxLength: [2, "Country cannot exceed 2 characters"],
        minLength: [2, "Country cannot preceed 2 characters"],
        required: [true, "Country cannot be empty"]
    },
    score: {
        type: Number,
        required: [true, "Score cannot be empty"]
    }
})

//creating model from schema
module.exports = mongoose.model("Player",Player);