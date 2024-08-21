const {default: mongoose}= require("mongoose");

const orderModel= new mongoose.Schema({
    user_Id:mongoose.Schema.Types.ObjectId,
    foodItemIds:String,
    resto_id:mongoose.Schema.Types.ObjectId,
    devliveryBoy_id:mongoose.Schema.Types.ObjectId,
    status:String,
    amount:String,

});
export const orderSchema= mongoose.model.orders || mongoose.model('orders',orderModel);