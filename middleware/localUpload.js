const express = require("express")
const path = require("path")
const multer = require("multer")


// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
module.exports = class localUpload {
    static async uploadAPI(req,res){
        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
              cb(null, 'uploads/');
            },
            filename: function(req, file, cb) {
              cb(null, Date.now() + '-' + file.originalname);
            }
          });

        const upload = multer({storage : storage}).single('file');
        if(!upload){
            return;
            res.status(400).send('No file uploaded');
        }
        res.send("Uploaded")
    }

  
}