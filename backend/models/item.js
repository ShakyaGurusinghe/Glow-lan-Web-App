const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

  productId:{
    type:String,
    required:true
  },
  productName:{
    type:String,
    required:true
  },
  productDescription:{
    type:String,
  },
  productPrice:{
    type:String,
  },
  productQuantity:{
    type:Number,
  },
  productImage:{
    type:String,
  },
  skinType:{
    type:String,
    
  },
  size:{
    type:String,
  },

});

module.exports =  Item= mongoose.model("Item", itemSchema);