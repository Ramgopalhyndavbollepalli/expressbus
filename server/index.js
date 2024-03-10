const express = require("express");
const cors = require("cors");
const connect = require("./src/configs/db");


const cityRouter = require("./src/controllers/city.controller");
const busRouter = require("./src/controllers/bus.controller");
const userRouter = require("./src/controllers/user.controller");
const orderRouter = require("./src/controllers/order.controller");
const paymentController = require('./src/controllers/payment.controller');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/',((req,res)=>{
  res.send("Working...")
}))
app.use("/user", userRouter);
app.use("/city", cityRouter);
app.use("/bus", busRouter);
app.use("/order", orderRouter);
app.use("/api/payment", paymentController);
app.post('/insert',async (req,res) => {
  req.body.password=await bcrypt.hash(req.body.password,5)
  console.log(req.body);
  col.insertOne(req.body);
  res.send("Data Recieved");
})




app.get('/show',async (req, res)=> {
  var result = await col.find().toArray();
  console.log(result);
  res.send(result);
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Server is running on http://localhost:8080`);
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1); // Exit process on database connection failure
  }
});
