//  import mongoose module
const mongoose = require("mongoose");
// import mongoose unique validator module
const uniqueValidator = require('mongoose-unique-validator');
// Create User Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    role: String,
    avatar : String,
});
userSchema.plugin(uniqueValidator);
//  Affect User Schema to Model Name User
const user = mongoose.model("User", userSchema);
//  Make user exportable
module.exports = user;