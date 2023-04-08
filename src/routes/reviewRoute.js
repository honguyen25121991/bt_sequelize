const express = require("express");
const userRouter = express.Router();

const {
  getReview,
  getReviewithRestaurent,
  getReviewWithUser,
  postReview,
} = require("../controllers/reviewController");

// tạo API
//get review
userRouter.get("/get-review", getReview);
userRouter.get("/get-review-with-restaurent/:id", getReviewithRestaurent);
userRouter.get("/get-review-with-user-id/:id", getReviewWithUser);
// post review
userRouter.post("/create-review", postReview);
module.exports = userRouter;
