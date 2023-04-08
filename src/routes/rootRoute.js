const express = require("express");
const rootRouter = express.Router();

const userRouter = require("./userRoute");
const foodRouter = require("./foodRoute");
const likeRoute = require("./likeRoute");
const reviewRoute = require("./reviewRoute");

rootRouter.use("/user", userRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/like", likeRoute);
rootRouter.use("/review", reviewRoute);

// rootRouter.use("/product", productRouter);

module.exports = rootRouter;
