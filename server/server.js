const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const connectDB = require("./src/config/db");

//Parses JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Expense Tracker API"});
});

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log("Server running...");
    });
};

startServer();
