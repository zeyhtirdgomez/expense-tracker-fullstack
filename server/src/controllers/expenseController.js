const { json } = require('express');
const Expense = require('../models/Expense');

const postExpense = async (req, res, next) => {
    try {
        // Destructuring req.body
        const {amount, category, description = "" } = req.body;
        
        // Creating expense document
        const expense = await Expense.create({
            amount,
            category,
            description  
        });

        // Returning created expense
        return res.status(201).json(expense);

    } catch (err) {
        next(err);
    }
};

const getExpenses = async (req, res, next) => {
    try {
        // Finding all expense
        const expenses = await Expense.find();
        
        // Returning array of documents
        return res.status(200).json(expenses);

    } catch (error) {
        next(error);
    }
};

const getExpense = async (req, res, next) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findById(id);
        
        if (!expense)
            return res.status(404).json({message : "Expense not found."});

        return res.status(200).json(expense);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    postExpense,
    getExpenses,   
    getExpense,
}