const express = require('express');
const router = express.Router();
const cors = require('cors');
const file_scheme = require('../models/file.model');
const file = require('../models/file.model');
router.route('/addFile').post(cors(),(req, res) => {
    const fileReq = {
        g_id: req.body.g_id,
        name: req.body.name,
        year: req.body.year,
        branch: req.body.branch,
        course: req.body.course,
        semester: req.body.semester,
        version: req.body   .version,
        unit: req.body.unit,
        wdlink: req.body.wdlink,
    };
    res.send(fileReq);
    
});


module.exports = router;