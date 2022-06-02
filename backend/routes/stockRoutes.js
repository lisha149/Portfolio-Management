const express = require("express");
const {
  getStocks,
  createStock,
  getStockById,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();
router.route("/").get(protect, getStocks);
router.route("/create").post(protect, createStock);
router
  .route("/:id")
  .get(getStockById)
  .put(protect, updateStock)
  .delete(protect, deleteStock);
module.exports = router;
