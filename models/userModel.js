const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  mobileId: { type: Schema.Types.ObjectId, ref: "Mobile", required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    cart: [cartItemSchema] // Add cart property
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
