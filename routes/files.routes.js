const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verify = require("../middleware/jwt");

const fileController = require("../controller/file.controller");
router.route('/addFile').post(upload.single('pdf'), fileController.apiUploadFiles);
router.route('/getFiles').get(fileController.apiGetFiles);
router.route('/getJsonFiles').get(fileController.apiGetJsonFiles);
router.route('/trending').post(fileController.apiUpdateTrending);
router.route('/getTrendingDay').get(fileController.apigetTrendingDay);
router.route('/getTrendingWeek').get(fileController.apigetTrendingWeekly);

module.exports = router;