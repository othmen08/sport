// import mongoose module
const mongoose = require("mongoose");
// creat Match Schema
const matchSchema = mongoose.Schema({

    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
// Affect match Schema to Model Name Match 
const match = mongoose.model("Match", matchSchema);

// Make match exportable

module.exports = match; 
