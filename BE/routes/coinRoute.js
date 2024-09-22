let express = require("express");

const { authorizedRoles, isAuthorizedUser } = require("../middlewares/auth");
const {
  addCoins,
  getCoins,
  updateCoinAddress,
  createTransaction,
  updateTransaction,
  getTransactions,
  getEachUser,
  getCoinsUser,
  getUserCoin,
  deleteEachUser,
  createUserTransaction,
  deleteTransaction,
  createUserTransactionWithdrawSwap,
  createUserTransactionDepositSwap,
  createUserStocks,
  deleteUserStocksApi,
} = require("../controllers/coinsController");

let router = express.Router();

router.route("/addCoins/:id").patch(isAuthorizedUser, addCoins);
router.route("/updateCoinAddress/:id").patch(isAuthorizedUser, updateCoinAddress);
router.route("/getCoins/:id").get(isAuthorizedUser, getCoins);
router.route("/getUserCoin/:id").get(isAuthorizedUser, getUserCoin);

router.route("/getCoinsUser/:id").get(isAuthorizedUser, getCoinsUser);
router
  .route("/deleteTransaction/:userId/:transactionId")
  .get(deleteTransaction);
router
  .route("/deleteUserStocksApi/:id/:coindId")
  .delete(deleteUserStocksApi);
router.route("/createTransaction/:id").patch(isAuthorizedUser, createTransaction);
router.route("/createUserStocks/:id").post(isAuthorizedUser, createUserStocks);
router.route("/createUserTransaction/:id").patch(isAuthorizedUser, createUserTransaction);
router
  .route("/createUserTransactionWithdrawSwap/:id")
  .patch(isAuthorizedUser, createUserTransactionWithdrawSwap);
router
  .route("/createUserTransactionDepositSwap/:id")
  .patch(isAuthorizedUser, createUserTransactionDepositSwap);
router.route("/updateTransaction/:id").patch(isAuthorizedUser, updateTransaction);
router.route("/getTransactions").get(isAuthorizedUser, getTransactions);
router.route("/getEachUser/:id").get(isAuthorizedUser, getEachUser);
router.route("/deleteEachUser/:id").delete(isAuthorizedUser, deleteEachUser);

module.exports = router;
