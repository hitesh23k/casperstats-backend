const router = require('express').Router();
const account_controller = require('../controllers/account_controller');

router.route("/get-account/:account").get(account_controller.GetAccount);
// router.route("/get-holder/:account").get(account_controller.GetHolder);
router.route("/get-transfers").get(account_controller.GetAccountTransfers);
router.route("/get-transfers-range/").get(account_controller.GetAccountTransfersRange);
router.route("/get-deploys/").get(account_controller.GetAccountDeploys);
router.route("/get-deploys-range/").get(account_controller.GetAccountDeploysRange);
router.route("/get-rich-accounts/:count").get(account_controller.GetRichAccounts);
router.route("/count-holders/").get(account_controller.CountHolders);

module.exports = router;
