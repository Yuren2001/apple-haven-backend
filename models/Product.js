const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blanked"],
    },
    description: {
      type: String,
      required: [true, "can't be blanked"],
    },
    price: {
      type: String,
      required: [true, "can't be blanked"],
    },
    category: {
      type: String,
      required: [true, "can't be blanked"],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
