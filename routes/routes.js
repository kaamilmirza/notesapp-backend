const express = require('express');
const router = express.Router();

router.use('/api/', require('./files.routes'));
router.use('/test', function(req, res){
    res.status(200).json({
        status: "working",
        message: "test"
    });
})

module.exports = router;
