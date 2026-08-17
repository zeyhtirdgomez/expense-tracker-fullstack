const express = require("express");
require("dotenv").config();

const app = express(); // Creates server 
const PORT = process.env.PORT; // Port number from .env
const connectDB = require("./src/config/db"); // Databse connection
const errorHandler = require('./src/middleware/errorHandler');

//CORS
const cors = require('cors');
app.use(cors());

//Routers
const authRoutes = require('./src/routes/authRoutes');
const expenseRouter = require('./src/routes/expenseRoutes');
const incomeRouter = require('./src/routes/incomeRoutes');

//Parses JSON requests
app.use(express.json());

//Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRouter);
app.use('/api/incomes', incomeRouter);

app.get("/", (req, res) => {
    res.status(200).json({message: "Expense Tracker API"});
});

// Error Handling
app.use(errorHandler);

//Starting server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server running...");
        });

    } catch (error) {
        console.log("Failed to connect: ", error);
        process.exit(1);
    }
};

startServer();

