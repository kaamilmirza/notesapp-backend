const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const fileController = require("../controller/file.controller");

router.route('/uploadFile').post(upload.single('pdf'), fileController.apiUploadFiles);

module.exports = router;