const mongoose = require("mongoose");
const { Schema } = mongoose;

const mobileSchema = new Schema({
  model: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  age: { type: Number, required: true },
});

const Mobile = mongoose.model("Mobile", mobileSchema);

module.exports = Mobile;
