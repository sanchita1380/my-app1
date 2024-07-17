const { default: mongoose } = require("mongoose");
const { describe } = require("node:test");


const foodModel = new mongoose.Schema({
    name:String,
    price:Number,
    img_path:String,
    description:String,
    tutional_id:mongoose.Schema.Types.ObjectId
})
export const foodSchema=  mongoose.models.tuts || mongoose.model("tuts",foodModel);