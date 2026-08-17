const express = require('express');
const router = express.Router();

//Controllers
const {
    postIncome,
    getIncomes,
    getIncome,
    updateIncome,
    deleteIncome,
} = require('../controllers/incomeController');

// Middlewares
const { 
    validateAmount, 
    validateCategory,
    updateAmountValidation,
} = require('../middleware/incomeExpenseValidation');
const authMiddleware = require('../middleware/authMiddleware');

router.get("/", authMiddleware, getIncomes);
router.get('/:id', authMiddleware, getIncome);
router.post("/", authMiddleware, validateAmount, validateCategory, postIncome);
router.patch("/:id", authMiddleware, updateAmountValidation, updateIncome);
router.put("/:id", authMiddleware, updateAmountValidation, updateIncome);
router.delete("/:id", authMiddleware, deleteIncome);

module.exports = router;