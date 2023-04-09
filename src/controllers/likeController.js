// import hàm quản lý các đối tượng model
const iniModels = require("../models/init-models");
// import chuỗi kết nối CSDL
const sequelize = require("../models/index");

const { successCode, errorCode, failCode } = require("../config/response");
// đối tượng chứa các model trong database
const model = iniModels(sequelize);

const getLike = async (req, res) => {
  let data = await model.like_res.findAll();
  successCode(res, data, "get like success1");
};
const getLikeWithRestaurent = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await model.like_res.findAll({
      where: {
        res_id: id,
      },
    });
    successCode(res, result, "get like success");
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};
const getLikeWithUser = async (req, res) => {
  try {
    let { id } = req.params;
    let result = await model.like_res.findAll({
      where: {
        user_id: id,
      },
    });
    successCode(res, result, "get like success");
    return;
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }
};
const postLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    // let check = await model.like_res.findOne({
    //   user_id: user_id,
    // });
    // if (check) {
    //   errorCode(res, "liked");
    // } else {
    let newLike = { user_id, res_id };
    let data = await model.like_res.create(newLike);
    successCode(res, data, "like success");
    return;
    // }
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }

  // res.send("sss");
};
const postUnLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let check = await model.like_res.findOne({
      user_id: user_id,
      res_id: res_id,
    });
    if (check) {
      let newLike = { user_id, res_id };
      let data = await model.like_res.update(newLike);
      successCode(res, data, "un like success");
      return;
    }
  } catch (error) {
    errorCode(res, "Lỗi backend");
  }

  // res.send("sss");
};
module.exports = {
  getLike,
  getLikeWithRestaurent,
  getLikeWithUser,
  postLike,
  postUnLike,
};
