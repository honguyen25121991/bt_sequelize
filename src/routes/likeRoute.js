const express = require("express");
const userRouter = express.Router();

const {
  getLike,
  getLikeWithRestaurent,
  getLikeWithUser,
  postLike,
} = require("../controllers/likeController");

// tạo API
userRouter.get("/get-like", getLike);
userRouter.get("/get-like-with-restaurent/:id", getLikeWithRestaurent);
userRouter.get("/get-like-with-user-id/:id", getLikeWithUser);
// post like
userRouter.post("/create-like", postLike);

module.exports = userRouter;
