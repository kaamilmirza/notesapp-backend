const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const fileController = require("../controller/file.controller");
router.route('/addFile').post(upload.single('pdf'), fileController.apiUploadFiles);
router.route('/getFiles').get(fileController.apiGetFiles);
router.route('/getJsonFiles').get(fileController.apiGetJsonFiles);

module.exports = router;