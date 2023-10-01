const mongoose = require("mongoose");
// creat team Schema
const teamSchema = mongoose.Schema({

    teamName: String,
    teamOwner: String,
    Stadium: String,
    foundation: Number,
    players:[{ type :mongoose.Schema.Types.ObjectId, ref : "player"}],
    stadiumId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stadium"
    },
});
// Affect team Schema to Model Name Team 
const team = mongoose.model("Team", teamSchema);

// Make team exportable

module.exports = team; 
