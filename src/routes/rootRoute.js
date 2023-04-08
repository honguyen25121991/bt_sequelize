const express = require("express");
const rootRouter = express.Router();

const userRouter = require("./userRoute");
const foodRouter = require("./foodRoute");
const likeRoute = require("./likeRoute");

rootRouter.use("/user", userRouter);
rootRouter.use("/food", foodRouter);
rootRouter.use("/like", likeRoute);

// rootRouter.use("/product", productRouter);

module.exports = rootRouter;
