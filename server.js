const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");
const mobileRoutes = require("./routes/mobileRoute");
const cartRoutes = require("./routes/cartRoute");

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected Successfully to MongoDB");
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
});

app.use("/users", userRoutes);
app.use("/", mobileRoutes);
app.use('/users', cartRoutes)

module.exports = app;
