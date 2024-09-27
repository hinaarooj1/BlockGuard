const mongoose = require("mongoose");

let userCoins = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  btcBalance: {
    type: Number,
    default: 0,
  },
  btcTokenAddress: {
    type: String,
    default: "N/A",
  },

  ethBalance: {
    type: Number,
    default: 0,
  },
  ethTokenAddress: {
    type: String,
    default: "N/A",
  },

  usdtBalance: {
    type: Number,
    default: 0,
  },
  additionalCoins: {
    type: [
      {
        coinName: { type: String, required: true },
        coinSymbol: { type: String, required: true },
        balance: { type: Number, default: 0 },
        tokenAddress: { type: String, default: "N/A" },
      }
    ],
    default: [
      { coinName: "BNB", coinSymbol: "bnb", balance: 0, tokenAddress: "N/A" },
      { coinName: "XRP", coinSymbol: "xrp", balance: 0, tokenAddress: "N/A" },
      { coinName: "Dogecoin", coinSymbol: "doge", balance: 0, tokenAddress: "N/A" },
      { coinName: "Toncoin", coinSymbol: "ton", balance: 0, tokenAddress: "N/A" },
      { coinName: "Chainlink", coinSymbol: "link", balance: 0, tokenAddress: "N/A" },
      { coinName: "Polkadot", coinSymbol: "dot", balance: 0, tokenAddress: "N/A" },
      { coinName: "Near Protocol", coinSymbol: "near", balance: 0, tokenAddress: "N/A" },
      { coinName: "USD Coin", coinSymbol: "usdc", balance: 0, tokenAddress: "N/A" },
      { coinName: "Tron", coinSymbol: "trx", balance: 0, tokenAddress: "N/A" }
    ],
  },
  usdtTokenAddress: {
    type: String,
    default: "N/A",
  },
  transactions: [
    {
      withdraw: {
        type: String,
        required: true,
        enum: ["crypto", "bank"],
      },
      selectedPayment: {
        type: String,
      },
      trxName: { type: String },
      amount: {
        type: Number,
        required: true,
      },
      txId: {
        type: String,
        required: true,
      },
      fromAddress: {
        type: String,
      },
      status: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      note: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      isHidden: {
        type: Boolean,
        default: false,
      },
      by: {
        type: String,
        default: "admin",
      },
    },
  ],

  stocks: [
    {
      stockName: {
        type: String,
        required: true,
      },
      stockSymbol: {
        type: String,
        required: true,
      },
      stockAmount: { type: Number, required: true },
      stockValue: {
        type: Number,
        required: true,
      },


    },
  ],
});

let userModel = mongoose.model("userCoin", userCoins);

module.exports = userModel;
