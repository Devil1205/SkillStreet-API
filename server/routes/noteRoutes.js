const express = require('express');
const { createNote, updateNote, deleteNote, getNotes, getNoteById } = require('../controllers/noteController');
const { createNoteValidation, updateNoteValidation } = require('../middlewares/validation/noteValidation');
const router = express.Router();

//create note route
router.post("/notes",createNoteValidation.errors,createNoteValidation.validate,createNote);

//update note route
router.put("/notes/:id",updateNoteValidation.errors,updateNoteValidation.validate,updateNote);

//delete note route
router.delete("/notes/:id",deleteNote);

//get all notes route
router.get("/notes",getNotes);

//get note by id route
router.get("/notes/:id",getNoteById);


module.exports = router;