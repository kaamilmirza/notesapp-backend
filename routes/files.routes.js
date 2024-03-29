const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const verify = require("../middleware/jwt");

const fileController = require("../controller/file.controller");
router.route('/addFile').post(upload.single('pdf'), fileController.apiUploadFiles);
router.route('/getFiles').get(verify,fileController.apiGetFiles);
router.route('/getJsonFiles').get(verify,fileController.apiGetJsonFiles);
router.route('/trending').post(verify, fileController.apiUpdateTrending);
router.route('/getTrendingDay').get(verify, fileController.apigetTrendingDay);
router.route('/getTrendingWeek').get(verify, fileController.apigetTrendingWeekly);
router.route('/newCourse').post(verify,fileController.apiCreateNewCourse);

module.exports = router;