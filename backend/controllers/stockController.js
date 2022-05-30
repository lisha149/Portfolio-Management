const Stock = require("../models/stockModel");
const asyncHandler = require("express-async-handler");

const getStocks = asyncHandler(async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

const createStock = asyncHandler(async (req, res) => {
  const { stockname, transitiontype, quantity, amount, transitiondate } =
    req.body;

  if (
    !stockname ||
    !transitiontype ||
    !quantity ||
    !amount ||
    !transitiondate
  ) {
    res.status(400);
    throw new Error("Please fill in all the feilds");
  } else {
    const stock = new Stock({
      user: req.user._id,
      stockname,
      transitiontype,
      quantity,
      amount,
      transitiondate,
    });

    const createdStock = await stock.save();

    res.status(201).json(createdStock);
  }
});
const getStockById = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);

  if (stock) {
    res.json(stock);
  } else {
    res.status(404).json({ message: "Stock not found" });
  }
});
// const UpdateStock = asyncHandler(async (req, res) => {
//   const { stockname, transitiontype, quantity, amount, transitiondate } = req.body;

//   const stock = await Stock.findById(req.params.id);

//   if (stock.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

//   if (stock) {
//     stock.stockname=stockname,
//  stock.transitiontype= transitiontype,
//   stock.quantity=quantity,
//   stock.amount=amount,
//   stock.transitiondate=transitiondate,

//     const updatedStock = await stock.save();
//     res.json(updatedStock);
//   } else {
//     res.status(404);
//     throw new Error("Stock not found");
//   }
// });

const deleteStock = asyncHandler(async (req, res) => {
  const stock = await Stock.findById(req.params.id);

  if (stock.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (stock) {
    await stock.remove();
    res.json({ message: "Stock Removed" });
  } else {
    res.status(404);
    throw new Error("Stock not Found");
  }
});
module.exports = { getStocks, createStock, getStockById, deleteStock };
