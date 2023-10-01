const mongoose = require("mongoose");
// creat player Schema
const playerSchema = mongoose.Schema({

    name: String,
    position: String,
    number: Number,
    avatar : String,
    teamId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Team"
    }
    
});
// Affect player Schema to Model Name player 
const player = mongoose.model("Player", playerSchema);

// Make team exportable

module.exports = player; 