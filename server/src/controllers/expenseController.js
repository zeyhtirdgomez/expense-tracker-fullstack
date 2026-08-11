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

const updateExpense = async (req, res, next) => {
    try {
        // Destructure request body
        const { amount, category, description } = req.body;

        // Find expense document using id parameter
        const expense = await Expense.findById(req.params.id);

        if (!expense)
            return res.status(404).json({message : "Expense not found."});

        // Update and validations
        if (amount !== undefined)
            expense.amount = Number(amount);

        if (category !== undefined)
            expense.category = String(category).trim();
        
        if (description !== undefined)
            expense.description = String(description).trim();

        await expense.save();

        return res.status(200).json(expense);

    } catch (error) {
        next(error);
    }
};

const deleteExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if(!expense) 
            return res.status(404).json({message : 'Expense not found.'});

        return res.sendStatus(204);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    postExpense,
    getExpenses,   
    getExpense,
    updateExpense,
    deleteExpense,
}