const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwtAuth = require('../middleware/authJWT')
const googleController = require('../controllers/googleController/google.controller')
const fileController = require('../controllers/fileController/file.controller');
const localUpload = require ('../middleware/localUpload');
const localUploadController = require('../controllers/fileController/localupload.controller');
const uploadSingle = require('../middleware/test');
const upload = require('../middleware/localUpload');
//routes relating to the file
router.route('/addFile').post(cors(),fileController.apiCreateFile);
router.route('/updateFile').post(cors(),fileController.apiUpdateFile);
router.route('/getFiles').get(cors(),fileController.apiGetFiles);
router.route('/getJsonFiles').get(cors(),fileController.apiGetJsonFiles);
router.route('/uploadSingleFile').post(uploadSingle.single('pdf'));

module.exports = router;