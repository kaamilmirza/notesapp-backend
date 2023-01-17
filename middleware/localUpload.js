const express = require("express")
const path = require("path")
const multer = require("multer")


// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
module.exports = class localUpload {


    static async upload(req,res,next){
        
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
              cb(null, "uploads/")
            },
            filename: (req, file, cb) => {
              cb(null, Date.now() + "-" + file.originalname)
            },
          })
          
        const uploadStorage = multer({storage : storage});
        uploadStorage.single("file");
    }

  
}