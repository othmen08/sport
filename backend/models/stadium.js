const mongoose =require("mongoose");
const stadiumSchema=mongoose.Schema({
    name:String,
    city:String,
    capacity:Number, 
    avatar:String,
    teamId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
});
const stadium=mongoose.model("Stadium",stadiumSchema);
module.exports=stadium;