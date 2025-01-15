const modelProduct = require("../models/index");

const getAllData = async (req, res) => {
  const products = await modelProduct.find();
  res.send(products);
};

const getDataById = async (req, res) => {
  const id = req.params.id;
  const product = await modelProduct.findById(id);
  res.send(product);
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const deleted = await modelProduct.findByIdAndDelete(id);
  res.send({ message: "deleted", deleted: deleted });
};


const postData = async (req, res) => {
  const newData = modelProduct({ ...req.body });
  await newData.save();
};

module.exports = {
  getAllData,
  getDataById,
  deleteData,
  postData,
};
