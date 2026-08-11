const Expense = require('../models/Expense');

const postExpense = async (req, res, next) => {
    try {
        const {amount, category, description = "" } = req.body;
        
        const expense = await Expense.create({
            amount,
            category,
            description  
        });

        return res.status(201).json(expense);

    } catch (err) {
        next(err);
    }
};

module.exports = {
    postExpense,
}