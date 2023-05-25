const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verify = require("../middleware/jwt");

const fileController = require("../controller/file.controller");
router.route('/addFile').post(upload.single('pdf'), fileController.apiUploadFiles);
router.route('/getFiles').get(fileController.apiGetFiles);
router.route('/getJsonFiles').get(fileController.apiGetJsonFiles);
router.route('/trending').post(verify, fileController.apiTrending);
router.route('/getTrending').get(fileController.apigetTrending);
module.exports = router;