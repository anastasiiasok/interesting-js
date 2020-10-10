-0,0 +1,15 @@
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: String,
   age: Number,
   favoriteProducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
   userOrder: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
});



const User = mongoose.model("User", userSchema);


module.exports = User ; 