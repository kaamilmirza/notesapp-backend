const express = require('express');            // Import expressjs
const JWTauth = require('../middleware/authJWT');
const cors = require('cors');
const router = express.Router();
router.route('/user/auth').post(cors(),JWTauth);
module.exports = router;