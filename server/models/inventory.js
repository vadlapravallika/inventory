const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        description: {
            type: String
        },
        sku: {
            type: String,
        },
        unit_price: {
            type: Array,
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