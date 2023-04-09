const express = require("express");
const userRouter = express.Router();

const { createOrder } = require("../controllers/orderController");

// tạo API

userRouter.post("/create-order", createOrder);
module.exports = userRouter;
