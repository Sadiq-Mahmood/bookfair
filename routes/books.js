const express = require("express");
const Shop = require("../models/shop");
const Book = require("../models/Book");
const router = express.Router();
router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const { shopId, bookName, stockCount, image } = req.body;
    const shop = await Shop.findById(shopId);
    if (!shop) {
      return res.status(400).send("Invalid shop ID");
    }
    const book = new Book({
      shopId,
      bookName,
      stockCount,
      image,
    });
    await book.save();
    res.send(book);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
router.get("/", async (req, res) => {
  try {
    const { shopId } = req.body;
    console.log(shopId);
    const books = await Book.find({ shopId });
    //  const books = await Book.findById({shopId});
    console.log(books);
    res.send(books);
  } catch (err) {
    console.log(err);
    console.log(res.send(err));
  }
});

module.exports = router;
