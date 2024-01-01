const mongoose = require('mongoose');

//creating mongodb schema
const Note = mongoose.Schema({
    title: {
        type: String,
        mingLength: [3, "Note title must be atleast 3 characters"],
        maxLength: [15, "Note title cannot exceed 15 characters"],
        required: [true, "Note title cannot be empty"]
    },
    content: {
        type: String,
        mingLength: [10, "Note content must be atleast 10 characters"],
        maxLength: [500, "Note content cannot exceed 500 characters"],
        required: [true, "Note content cannot be empty"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModifiedAt: {
        type: Date,
        default: Date.now,
    },
})

//creating model from schema
module.exports = mongoose.model("Note",Note);