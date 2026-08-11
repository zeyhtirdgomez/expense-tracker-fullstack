const express = require('express');
const router = express.Router();

//Controllers
const {
    postExpense,
    getExpenses,
    getExpense,
} = require('../controllers/expenseController');

//Validation
const { 
    validateAmount, 
    validateCategory 
} = require('../middleware/expenseValidation');


router.get("/", getExpenses);
router.get('/:id', getExpense);
router.post("/", validateAmount, validateCategory, postExpense);

module.exports = router;