// import hàm quản lý các đối tượng model
const iniModels = require("../models/init-models");
// import chuỗi kết nối CSDL
const sequelize = require("../models/index");

const { successCode, errorCode, failCode } = require("../config/response");
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const getReview = async (req, res) => {
  let data = await model.like_res.findAll();
  successCode(res, data, "get review success");
};
const getReviewithRestaurent = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await model.rate_res.findAll({
      where: {
        res_id: id,
      },
    });
    successCode(res, result, "get review success");
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};
const getReviewWithUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await model.rate_res.findAll({
      where: {
        user_id: id,
      },
    });
    successCode(res, result, "get review success");
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};
const postReview = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let newReview = { user_id, res_id, amount };
    let data = await model.rate_res.create(newReview);
    successCode(res, data, "post review success");
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};
module.exports = {
  getReview,
  getReviewithRestaurent,
  getReviewWithUser,
  postReview,
};
