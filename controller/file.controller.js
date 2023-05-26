const fileService = require("../services/file.service");
const config = require("../config/config");
module.exports = class FileController {
  static async apiUploadFiles(req, res) {
    try {
      //to upload the files (pdf) to amazon s3
      const file = req.file;
      const uploadResult = await fileService.createFile(req);
      res.status(201).json({
        status: "success",
        data: {
          fileName: file.originalname,
          location: uploadResult.location,
          mongoFile: uploadResult.mongoFile,
          fileJson: uploadResult.fileJson,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async apiGetFiles(req, res) {
    try {
      const files = await fileService.getFileList(req);
      res.status(201).json({
        status: "success",
        data: {
          files: files,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async apiGetJsonFiles(req, res) {
    try {
      const files = await fileService.getJsonFileList(req);
      res.status(201).json({
        status: "success",
        data: {
          files: files,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async apiUpdateTrending(req, res, next) {
    try {
      const trending = await fileService.updateTrending(req);
      res.status(201).json({
        status: "success",
        data: {
          trending: trending,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async apigetTrendingDay(req, res, next) {
    try {
      const trending = await fileService.getTrendingDay();
      res.status(201).json({
        status: "success",
        data: {
          trending: trending,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async apigetTrendingWeekly(req, res, next) {
    try {
      const trending = await fileService.getTrendingWeekly();
      res.status(201).json({
        status: "success",
        data: {
          trending: trending,
        },
      });
    } catch (error) {
      throw error;
    }
  }
};
