const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwtAuth = require('../middleware/authJWT')
const googleController = require('../controllers/googleController/google.controller')
const fileController = require('../controllers/fileController/file.controller');
//routes relating to the file
router.route('/addFile').post(cors(),fileController.apiCreateFile);
router.route('/updateFile').post(cors(),fileController.apiUpdateFile);
router.route('/getFiles').get(cors(),fileController.apiGetFiles);
router.route('/getJsonFiles').get(cors(),fileController.apiGetJsonFiles);

module.exports = router;