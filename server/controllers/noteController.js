const Note = require('../models/noteSchema');
const objectId = require('mongoose').Types.ObjectId;

//create note controller
const createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const note = new Note({
            title,
            content,
        });
        await note.save();
        return res.status(200).json({ success: true, message: note });
    }
    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//update note controller
const updateNote = async (req, res) => {
    //if params id is invalid
    if (!req.params.id || !objectId.isValid(req.params.id))
        return res.status(500).json({ success: false, message: "Invalid Note ID" });

    try {
        const { title, content } = req.body;
        const note = await Note.findById(req.params.id);

        //if no note is found in db
        if (!note)
            return res.status(500).json({ success: false, message: "No Note found" });

        //update title and content & modified time
        note.title = title;
        note.content = content;
        note.lastModifiedAt = Date.now();

        await note.save();
        return res.status(200).json({ success: true, message: note });
    }

    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//delete note controller
const deleteNote = async (req, res) => {
    //if params id is invalid
    if (!req.params.id || !objectId.isValid(req.params.id))
        return res.status(500).json({ success: false, message: "Invalid Note ID" });

    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        //if no note is found in db
        if (!note)
            return res.status(500).json({ success: false, message: "No Note found" });

        return res.status(200).json({ success: true, message: note });
    }

    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//get notes controller
const getNotes = async (req, res) => {
    try {
        const note = await Note.find();
        return res.status(200).json({ success: true, message: note });
    }

    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

//get note by id controller
const getNoteById = async (req, res) => {
    //if params id is invalid
    if (!req.params.id || !objectId.isValid(req.params.id))
        return res.status(500).json({ success: false, message: "Invalid Note ID" });

    try {
        const note = await Note.findById(req.params.id);

        //if no note is found in db
        if (!note)
            return res.status(500).json({ success: false, message: "No Note found" });

        return res.status(200).json({ success: true, message: note });
    }

    catch (e) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

module.exports = { createNote, updateNote, deleteNote, getNotes, getNoteById };