const express = require('express');
const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './pdfStorage');
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});
// Initialize Multer
const upload = multer({ storage: storage });
module.exports = upload;
// Handle file uploads



