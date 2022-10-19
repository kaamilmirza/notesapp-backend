const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use('/', require('./files'));
router.use('/', require('./googleAPI'))


module.exports = router;