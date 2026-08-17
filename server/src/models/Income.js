const mongoose = require("mongoose");

//Structural framework for Expense model
const incomeSchema = new mongoose.Schema({
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

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;