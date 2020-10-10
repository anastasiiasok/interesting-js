const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    description: String,
    price: Number,
    amount: Number,
    bestBy: Date,
 });
 const Product = mongoose.model("Product", productSchema);

 module.exports = Product;