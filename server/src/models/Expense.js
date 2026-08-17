const mongoose = require("mongoose");

//Structural framework for Expense model
const expenseSchema = new mongoose.Schema({
    amount : {
        type: Number,
        min : 0,
        required: true
    },
    category : {
        type: String,
        required: true,
        trim : true
    },
    description : {
        type: String,
        trim : true //To remove whitespaces before and after alphnum
    },
    date : {
        type : Date,
        default : Date.now,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
