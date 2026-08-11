const express = require('express');
const router = express.Router();

//Controllers
const {
    postExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense,
} = require('../controllers/expenseController');

//Validation
const { 
    validateAmount, 
    validateCategory,
    updateAmountValidation,
} = require('../middleware/expenseValidation');


router.get("/", getExpenses);
router.get('/:id', getExpense);
router.post("/", validateAmount, validateCategory, postExpense);
router.patch("/:id", updateAmountValidation, updateExpense);
router.delete("/:id", deleteExpense);

module.exports = router;