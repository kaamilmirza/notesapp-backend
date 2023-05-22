const fileService = require("../services/file.service");
const config = require('../config/config');
module.exports = class FileController {
  static async apiUploadFiles(req, res) {
    try {
      //to upload the files (pdf) to amazon s3
      const file = req.file;
      const uploadResult = await fileService.uploadfile(req);
      res.status(201).json({
        status: "success",
        data: {
          fileName: file.originalname,
          location: uploadResult.location,
        },
      });
      //to create File entry into MongoDB
      const file_mongo = fileService.createFile(req);
      const file_app = fileService.createFileJson(file_mongo);
      res.json({file_mongo, file_app});

    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }



};
