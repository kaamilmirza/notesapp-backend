const express = require('express');
const multer = require('multer');
const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'D:/Programminglearning/notesapp-backend/pdfStorage');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize Multer
const upload = multer({ storage: storage });
module.exports = upload;
// Handle file uploads



