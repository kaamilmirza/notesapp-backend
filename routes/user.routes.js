const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verify = require("../middleware/jwt");
const admin = require('../middleware/admin');
const userController = require("../controller/user.controller");

router.route('/addUser').post(verify, userController.apiAddUser);
router.route('/addAdmin').post(verify, admin, userController.apiAddAdmin);

module.exports = router;