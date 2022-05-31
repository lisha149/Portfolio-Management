const express = require("express");
const {
  getStocks,
  createStock,
  getStockById,
  deleteStock,
} = require("../controllers/stockController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();
router.route("/").get(protect, getStocks);
router.route("/create").post(protect, createStock);
router.route("/:id").get(getStockById).delete(protect, deleteStock);
//   .put(protect, UpdateStock)
module.exports = router;
