const mongoose = require("mongoose");
const stockSchema = mongoose.Schema(
  {
    stockname: {
      type: String,
      required: true,
      unique: true,
    },
    transitiontype: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
    },
    transitiondate: {
      type: Date,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
