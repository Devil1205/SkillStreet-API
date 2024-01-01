const { body, validationResult } = require('express-validator');

//create note error validation middleware
const createNoteValidation = {
    errors:
        [
            body('title')
                .trim()
                .notEmpty().withMessage("Title cannot be empty")
                .isLength({ min: 3 }).withMessage("Title must be atleast 3 characters")
                .isLength({ max: 15 }).withMessage("Title cannot exceed 15 characters"),
            body('content')
                .trim()
                .notEmpty().withMessage("Content cannot be empty")
                .isLength({ min: 3 }).withMessage("Content must be atleast 10 characters")
                .isLength({ max: 500 }).withMessage("Content cannot exceed 500 characters")
        ],
    validate:
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ success: false, message: errors });
            }
            next();
        }
}

//update note error validation middleware
const updateNoteValidation = {
    errors:
        [
            body('title')
                .trim()
                .notEmpty().withMessage("Title cannot be empty")
                .isLength({ min: 3 }).withMessage("Title must be atleast 3 characters")
                .isLength({ max: 15 }).withMessage("Title cannot exceed 15 characters"),
            body('content')
                .trim()
                .notEmpty().withMessage("Content cannot be empty")
                .isLength({ min: 3 }).withMessage("Content must be atleast 10 characters")
                .isLength({ max: 500 }).withMessage("Content cannot exceed 500 characters")
        ],
    validate:
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ success: false, message: errors });
            }
            next();
        }
}

module.exports = { createNoteValidation, updateNoteValidation };
