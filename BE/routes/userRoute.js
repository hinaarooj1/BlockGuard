let express = require("express");
const {
  RegisterUser,
  loginUser,
  logoutUser,
  resetPassword,
  allUser,
  singleUser,
  updateSingleUser,
  verifySingleUser,
  getsignUser,
  verifyToken,
  updateKyc,
  sendTicket,
  getHtmlData,
  setHtmlData,
  bypassSingleUser,
  sendEmailCode,
  createAccount,
  deletePayment,
  addCard,
  updateSingleUserStatus,
} = require("../controllers/userController");
const { authorizedRoles, isAuthorizedUser } = require("../middlewares/auth");
const singleUpload = require("../middlewares/multer");

let router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/allUser").get(isAuthorizedUser, allUser);
router.route("/singleUser/:id").get(isAuthorizedUser, singleUser);
router.route("/updateSingleUser/:id").post(isAuthorizedUser, updateSingleUser);
router.route("/updateSingleUserStatus/:id").post(isAuthorizedUser, updateSingleUserStatus);
router.route("/bypassSingleUser/:id").patch(isAuthorizedUser, bypassSingleUser);
router.route("/verifySingleUser").patch(isAuthorizedUser, singleUpload, verifySingleUser);
router.route("/getHtmlData").get(isAuthorizedUser, getHtmlData);
router.route("/password/reset").post(resetPassword);
router.route("/getsignUser").patch(isAuthorizedUser, singleUpload, getsignUser);
router.route("/:id/verify/:token").get(isAuthorizedUser, verifyToken);
router.route("/updateKyc/:id").patch(isAuthorizedUser, updateKyc);
router.route("/setHtmlData").patch(isAuthorizedUser, setHtmlData);
router.route("/sendTicket").post(isAuthorizedUser, sendTicket);
router.route("/createAccount/:id").patch(isAuthorizedUser, createAccount);
router.route("/addCard/:id").patch(isAuthorizedUser, addCard);
router.route("/sendEmail").post(sendEmailCode);
router.route("/deletePayment/:id/:pId").get(isAuthorizedUser, deletePayment);

module.exports = router;
