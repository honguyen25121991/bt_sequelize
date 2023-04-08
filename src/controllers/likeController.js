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
  let id = req.params.id;
  let idNhaHang = await model.restaurant.findOne({ res_id: 2 });
  // const { id } = req.body;
  console.log(id);
  console.log(idNhaHang);
  // let data = await model.like_res.findAll();
  successCode(res, idNhaHang, "get like success");
};
module.exports = { getLike, getLikeWithRestaurent };
