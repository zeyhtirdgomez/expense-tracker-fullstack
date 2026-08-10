const mongoose = require("mongoose");

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
        trim : true
    },
    date : {
        type : Date,
        default : Date.now,
    }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
