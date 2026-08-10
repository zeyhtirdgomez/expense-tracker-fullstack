const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const Expense = require('./src/models/Expense');
const connectDB = require("./src/config/db");
const { validateAmount, validateCategory } = require('./src/middleware/expenseValidation');

//Parses JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Expense Tracker API"});
});

//Temporary requests
app.post("/expense", validateAmount, validateCategory, async (req, res, next) => {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
    console.log("Posted.");
});

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log("Server running...");
    });
};

startServer();

