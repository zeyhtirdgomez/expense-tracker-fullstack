const express = require('express');
const router = express.Router();

//Controllers
const {
    postExpense,
} = require('../controllers/expenseController');

//Validation
const { validateAmount, validateCategory } = require('../middleware/expenseValidation');


router.post("/", validateAmount, validateCategory, postExpense);

module.exports = router;