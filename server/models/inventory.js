const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        description: {
            type: String
        },
        price: {
            type: String,
        },
        quantity: {
            type: Number
        },
        location: {
            type: String,
        },
    },
    { timestamps: true }
);
  
const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports =  { ProductModel }