// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017/newbus");
//   return console.log('Mongodb connected successfully');
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    process.env.MONGO_PATH,
    { useNewUrlParser: true }
  ); 
};

module.exports = connect;


