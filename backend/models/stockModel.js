const mongoose = require("mongoose");
const stockSchema = mongoose.Schema(
  {
    stockname: {
      type: Object,
      required: true,
    },
    transactiontype: {
      type: String,
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
    transactiondate: {
      type: Date,
      default: Date.now,
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
