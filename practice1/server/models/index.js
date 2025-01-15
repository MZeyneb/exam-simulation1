const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    image: String,
  name: String,
  description: String,
  price: Number,
});

const modelProduct = mongoose.model("products", productSchema);

module.exports = modelProduct;
