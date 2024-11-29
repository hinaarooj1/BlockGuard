const mongoose = require("mongoose");

let userCoins = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",

    unique: true,
  },
  btcBalance: {
    type: Number,
    default: 0,
  },
  btcTokenAddress: {
    type: String,
    default: "",
  },

  ethBalance: {
    type: Number,
    default: 0,
  },
  ethTokenAddress: {
    type: String,
    default: "",
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
        tokenAddress: { type: String, default: "" },
      }
    ],
    default: [
      { coinName: "BNB", coinSymbol: "bnb", balance: 0, tokenAddress: "" },
      { coinName: "XRP", coinSymbol: "xrp", balance: 0, tokenAddress: "" },
      { coinName: "Dogecoin", coinSymbol: "doge", balance: 0, tokenAddress: "" },
      { coinName: "Toncoin", coinSymbol: "ton", balance: 0, tokenAddress: "" },
      { coinName: "Chainlink", coinSymbol: "link", balance: 0, tokenAddress: "" },
      { coinName: "Polkadot", coinSymbol: "dot", balance: 0, tokenAddress: "" },
      { coinName: "Near Protocol", coinSymbol: "near", balance: 0, tokenAddress: "" },
      { coinName: "USD Coin", coinSymbol: "usdc", balance: 0, tokenAddress: "" },
      { coinName: "Tron", coinSymbol: "trx", balance: 0, tokenAddress: "" },
      { coinName: "Solana", coinSymbol: "sol", balance: 0, tokenAddress: "" },
      { coinName: "Euro", coinSymbol: "eur", balance: 0, tokenAddress: "" }
    ],
  },
  usdtTokenAddress: {
    type: String,
    default: "",
  },
  transactions: [
    {
      withdraw: {
        type: String,

        enum: ["crypto", "bank"],
      },
      selectedPayment: {
        type: String,
      },
      trxName: { type: String },
      amount: {
        type: Number,

      },
      txId: {
        type: String,

      },
      fromAddress: {
        type: String,
      },
      status: {
        type: String,

      },
      type: {
        type: String,

      },
      note: {
        type: String,
      },
      reference: {
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

      },
      stockSymbol: {
        type: String,

      },
      stockAmount: { type: Number, required: true },
      stockValue: {
        type: Number,

      },


    },
  ],
});

let userModel = mongoose.model("userCoin", userCoins);

module.exports = userModel;
