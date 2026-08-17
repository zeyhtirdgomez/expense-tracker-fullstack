const { json } = require('express');
const Income = require('../models/Income');

const postIncome = async (req, res, next) => {
    try {
        // Destructuring req.body
        const {amount, category, description = "" } = req.body;
        
        const user = req.user.id;
        
        // Creating income document
        const income = await Income.create({
            user,
            amount,
            category,
            description  
        });

        // Returning created income
        return res.status(201).json(income);

    } catch (err) {
        next(err);
    }
};

const getIncomes = async (req, res, next) => {
    try {
        // Finding all income
        const incomes = await Income.find({user : req.user.id});
        
        // Returning array of documents
        return res.status(200).json(incomes);

    } catch (error) {
        next(error);
    }
};

const getIncome = async (req, res, next) => {
    try {
        const { id } = req.params;

        const income = await Income.findOne({user : req.user.id, _id : req.params.id});
        
        if (!income)
            return res.status(404).json({message : "Income not found."});

        return res.status(200).json(income);

    } catch (error) {
        next(error);
    }
};

const updateIncome = async (req, res, next) => {
    try {
        // Destructure request body
        const { amount, category, description } = req.body;

        // Find income document using id parameter
        const income = await Income.findOne({user : req.user.id, _id : req.params.id});

        if (!income)
            return res.status(404).json({message : "Income not found."});

        // Update and validations
        if (amount !== undefined)
            income.amount = Number(amount);

        if (category !== undefined)
            income.category = String(category).trim();
        
        if (description !== undefined)
            income.description = String(description).trim();

        await income.save();

        return res.status(200).json(income);

    } catch (error) {
        next(error);
    }
};

const deleteIncome = async (req, res, next) => {
    try {
        const income = await Expense.findOneAndDelete({user : req.user.id, _id : req.params.id});

        if(!income) 
            return res.status(404).json({message : 'Income not found.'});

        return res.sendStatus(204);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    postIncome,
    getIncomes,   
    getIncome,
    updateIncome,
    deleteIncome,
}