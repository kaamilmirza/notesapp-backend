const stream = require('stream');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const googleController = require('../controllers/googleController/google.controller')
const router = express.Router();
//routes relating to grive 
router.route('/gdrive').post(cors(),googleController.apiGdrive);
module.exports = router;