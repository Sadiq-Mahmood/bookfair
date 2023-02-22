const express = require("express");
const Shop = require("../models/shop");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { shopName, email } = req.body;
    const shop = new Shop({ shopName, email });
    await shop.save();
    res.status(201).json({ success: true, data: shop });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
