const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const user = require("./models/userModel");

const cors = require("cors");
app.use(cors());

const userRouter = require("./router/userRoute");
//const routerss= require('./router/userRoute') same ho bhi skta h nhi bhi

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/merndb")
  .then(() => {
    console.log(" DB Connected successfuly");
    app.listen(5000, (err) => {
      if (err) console.log(err);
      console.log("running successfuly at", 5000);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(userRouter);
//  app.use("./api/users",userRouter)
