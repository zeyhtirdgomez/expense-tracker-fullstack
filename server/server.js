// Object declaration and destucturing
const express = require("express");
require("dotenv").config();

const app = express(); // Creates server 
const PORT = process.env.PORT; // Port number from .env
const connectDB = require("./src/config/db"); // Databse connection
const errorHandler = require('./src/middleware/errorHandler');

//Routers
const expenseRouter = require('./src/routes/expenseRoutes');

//Parses JSON requests
app.use(express.json());

//Endpoints
app.get("/", (req, res) => {
    res.status(200).json({message: "Expense Tracker API"});
});

app.use('/api/expense', expenseRouter);

app.use(errorHandler);

//Starting server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server running...");
        });

    } catch (error) {
        console.log("Failed to connect");
    }
};

startServer();

