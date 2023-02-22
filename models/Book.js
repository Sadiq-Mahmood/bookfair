const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  stockCount: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
