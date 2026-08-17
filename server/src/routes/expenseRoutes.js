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

// Middlewares
const { 
    validateAmount, 
    validateCategory,
    updateAmountValidation,
} = require('../middleware/expenseValidation');
const authMiddleware = require('../middleware/authMiddleware');

router.get("/", authMiddleware, getExpenses);
router.get('/:id', authMiddleware, getExpense);
router.post("/", authMiddleware, validateAmount, validateCategory, postExpense);
router.patch("/:id", authMiddleware, updateAmountValidation, updateExpense);
router.put("/:id", authMiddleware, updateAmountValidation, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;