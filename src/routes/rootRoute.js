const express = require("express");
const rootRouter = express.Router();

const userRouter = require("./userRoute");
const foodRouter = require("./foodRoute");
const likeRoute = require("./likeRoute");
const reviewRoute = require("./reviewRoute");
const orderRoute = require("./orderRoute");

rootRouter.use("/user", userRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/like", likeRoute);
rootRouter.use("/review", reviewRoute);
rootRouter.use("/order", orderRoute);

// rootRouter.use("/product", productRouter);

module.exports = rootRouter;
