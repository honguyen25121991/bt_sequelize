const express = require("express");
const userRouter = express.Router();

const {
  getLike,
  getLikeWithRestaurent,
} = require("../controllers/likeController");

// tạo API
userRouter.get("/get-like", getLike);
userRouter.get("/get-like-with-restaurent/:id", getLikeWithRestaurent);

module.exports = userRouter;
