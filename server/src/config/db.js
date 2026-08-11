require("dotenv").config();
const mongoose = require('mongoose');

//MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;

//Function for connecting the system to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MonggoDB connected");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB;