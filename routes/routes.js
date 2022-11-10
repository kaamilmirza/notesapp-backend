const express = require('express');
const router = express.Router();
const cors = require('cors');
//indexing all routes in a single file
router.use('/', require('./files'));
router.use('/', require('./googleAPI'))
router.use('/',require('./jwt'))
module.exports = router;