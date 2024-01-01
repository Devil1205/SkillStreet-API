const express = require('express');
const { createNote, updateNote, deleteNote, getNotes, getNoteById } = require('../controllers/noteController');
const { createNoteValidation, updateNoteValidation } = require('../middlewares/validation/noteValidation');
const userAuth = require('../middlewares/authorization/userAuthorization');
const router = express.Router();

//create note route
router.post("/notes",userAuth,createNoteValidation.errors,createNoteValidation.validate,createNote);

//update note route
router.put("/notes/:id",userAuth,updateNoteValidation.errors,updateNoteValidation.validate,updateNote);

//delete note route
router.delete("/notes/:id",userAuth,deleteNote);

//get all notes route
router.get("/notes",userAuth,getNotes);

//get note by id route
router.get("/notes/:id",userAuth,getNoteById);


module.exports = router;