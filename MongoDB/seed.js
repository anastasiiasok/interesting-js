const dbConnect = require('./dbConnect');
const mongoose = require('mongoose');
const User = require('./user.js');
const Product = require('./product.js');
const Order = require('./order.js');

dbConnect();

async function createProducts() {
  await Product.insertMany([
    { description: 'banana' },
    { description: 'orange' },
    { description: 'tangerine' },
  ]);
}

const createUsers = async () => {
  await User.insertMany([
    {
      name: 'Anastasia',
      age: 29,
      favoriteProducts: await Product.find({},{ _id: true}),



    },

    { name: 'Eva', age: 27 , userOrder},

  ]);


  const p = await User.find(
    { name: 'Anastasia' },
    { favoriteProducts: true, _id: false }
  ).populate({ path: 'favoriteProducts', select: 'description' });
  //console.log(p[0].favoriteProducts.map((el) => el.description));
};
// async function getOrdersbyName() {

//   const getOrdersbyName = await Order.find({_id: "5f7df3b215d6fa37e9796862"})
//   console.log(getOrdersbyName)

// }

async function createOrder() {
  await Order.insertMany([
    { price : 15,amount: 1},
    { price: 33, amount: 2 },
    { price: 45, amount: 3 },
  ]);
  //const getOrders = await Order.find();
  //console.log(getOrders);
  const getOrdersbyName = await Order.find({_id: "5f7df3b215d6fa37e9796862"})
  console.log(getOrdersbyName)
}

async function logic(){
 await createUsers();
 await createProducts();
 await createOrder()
mongoose.connection.close(() => {
  console.log('Connection closed');
});
}
// logic()
createOrder()

// async function getOrders() {
//   const getOrders = await Order.find();

//   console.log(getOrders`);
