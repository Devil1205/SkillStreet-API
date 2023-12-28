const { body, validationResult } = require('express-validator');

//create player error validation
const createPlayerValidation = {
    errors:
        [
            body('name')
                .trim()
                .notEmpty().withMessage("Name cannot be empty")
                .isLength({ max: 15 }).withMessage("Name cannot exceed 15 characters"),
            body('country')
                .trim()
                .notEmpty().withMessage("Country cannot be empty")
                .isLength({ min: 2, max: 2 }).withMessage("Country must be only 2 characters"),
            body('score')
                .trim()
                .notEmpty().withMessage("Score cannot be empty")
                .isNumeric().withMessage("Score must be an integer"),
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

//create player error validation
const updatePlayerValidation = {
    errors:
        [
            body('name')
                .trim()
                .notEmpty().withMessage("Name cannot be empty")
                .isLength({ max: 15 }).withMessage("Name cannot exceed 15 characters"),
            body('score')
                .trim()
                .notEmpty().withMessage("Score cannot be empty")
                .isNumeric().withMessage("Score must be an integer"),
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

module.exports = { createPlayerValidation, updatePlayerValidation };
