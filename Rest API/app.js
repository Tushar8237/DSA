const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose
  .connect("mongodb://locoalhost:27017/Sample", {})
  .then(() => {
    console.log("connected to mongoDB succesfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json);

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  preice: Number,
});

const Product = new mongoose.model("Product", productSchema);

// Create Product
app.post("/api/v1/product/new", async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

app.listen(4500, () => {
  console.log("server is working on http://localhost:4500");
});
