const express = require('express');
const router = express.Router();
const cors = require('cors');
//indexing all routes in a single file
router.use('/api/v1/', require('./files.routes'));
router.use('/api/v1/', require('./googleAPI.routes'))
router.use('/api/v1/',require('./auth.routes'))
module.exports = router;