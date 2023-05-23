const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verify = require("../middleware/jwt");
const admin = require('../middleware/admin');
const userController = require("../controller/user.controller");

const fileController = require("../controller/file.controller");
router.route('/addFile').post(verify,upload.single('pdf'), fileController.apiUploadFiles);
router.route('/getFiles').get(verify,fileController.apiGetFiles);
router.route('/getJsonFiles').get(verify, fileController.apiGetJsonFiles);

module.exports = router;