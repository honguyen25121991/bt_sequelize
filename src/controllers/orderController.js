// import hàm quản lý các đối tượng model
const iniModels = require("../models/init-models");
// import chuỗi kết nối CSDL
const sequelize = require("../models/index");

const { successCode, errorCode, failCode } = require("../config/response");
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let check = await model.order.findOne({
      user_id: user_id,
      food_id: food_id,
    });
    if (check) {
      failCode(res, "Ordered");
      return;
    } else {
      let newReview = { user_id, food_id, amount, code, arr_sub_id };
      let data = await model.order.create(newReview);
      successCode(res, data, "order food success");
      return;
    }
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};

module.exports = { createOrder };
