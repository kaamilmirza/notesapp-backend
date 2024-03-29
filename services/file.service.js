const s3 = require("../services/AWS.service");
const config = require("../config/config");
const File = require("../models/file.model");
const FileJson = require("../models/courses.model");
const fs = require("fs");
const FileAccess = require("../models/trending.model");
const trending = require("../models/trending.model");

module.exports = class fileService {
  //create a file (upload to s3 and mongodb)
  static async createFile(req) {
    try {
      let mongoFileDoc;
      let mongoFileJson;
      const fileExt = req.file;
      const fileData = fs.readFileSync(fileExt.path);
      const fileName = `${Date.now()}.${fileExt.originalname.split(".").pop()}`;
      const uploadResult = s3
        .upload({
          Bucket: config.amazonBuckets.bucket,
          Key: fileName,
          Body: fileData,
        })
        .promise();
      fs.unlinkSync(fileExt.path);
      const location = (await uploadResult).Location;
      if (!location) {
        throw new Error("Failed to upload file or get upload location.");
      }
      const fileDoc = await File.findOne({
        reslink: location,
      }).lean();
      const generateFileId = () =>
        Array.from(
          { length: 6 },
          () =>
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
              Math.floor(Math.random() * 52)
            ]
        ).join("");
      const fileId = generateFileId();
      if (!fileDoc) {
        const {
          name,
          year,
          branch,
          course,
          semester,
          version,
          unit,
          author,
          authorId,
        } = req.body;
        const newFileDoc = await File.create({
          fileId: fileId,
          name: name,
          year: year,
          branch: branch,
          course: course,
          semester: semester,
          version: version,
          unit: unit,
          reslink: location,
          createdAt: Date.now(),
          author: author,
          authorId: authorId,
        });
        mongoFileDoc = await newFileDoc;
      }
      const fileJsonDoc = await FileJson.findOne({
        cname: req.body.course,
      }).lean();
      if (!fileJsonDoc) {
        const newFileDoc = await FileJson.create({
          cid: (1000 + Math.random() * 9000).toFixed(0),
          cname: req.body.course,
          fileId: [fileId],
        });
        mongoFileJson = newFileDoc;
      } else {
        const updated = await FileJson.findOneAndUpdate(
          { cname: req.body.course },
          {
            $push: {
              fileId: fileId,
            },
          }
        );
        mongoFileJson = updated;
      }
      return {
        fileName: fileExt.originalname,
        location: location,
        mongoFile: mongoFileDoc,
        fileJson: mongoFileJson,
      };
    } catch (error) {
      throw error;
    }
  }

  static async getFileList() {
    try {
      const files = await File.find().lean().sort({ createdAt: -1 });
      return files;
    } catch (error) {
      throw error;
    }
  }

  static async getJsonFileList() {
    try {
      const files = await FileJson.find().lean();
      return files;
    } catch (error) {
      throw error;
    }
  }

  static async updateTrending(req) {
    try {
      const updates = req.body['key'].map(async (item) => {
        const { fileId, accessToday, accessWeekly } = item;
        await File.updateOne(
          { fileId: fileId },
          { $set: { accessToday: accessToday, accessWeekly: accessWeekly } }
        );
      });
      const results = await Promise.all(updates);      
      return results;
    } catch (error) {
      throw error;
    }
  }

  static async getTrendingWeekly() {
    try {
      const mostAccessedWeekly = await File.find()
        .lean()
        .sort({ accessWeekly: -1 })
        .limit(10);
      return mostAccessedWeekly;
    } catch (error) {
      throw error;
    }
  }

  static async getTrendingDay() {
    try {
      const mostAccessedDaily = await File.find()
        .lean()
        .sort({ accessToday: -1 })
        .limit(10);
      return mostAccessedDaily;
    } catch (error) {
      throw error;
    }
  }

  static async addNewCourse(req) {
    try {      
      const { cname } = req.body;
      //validate course name
      if (!cname) {
        throw new Error("Course name is required");
      }
      //uniquely generate cid
      const cid = (1000 + Math.random() * 9000).toFixed(0);
      //check if cid already exists
      const check = await FileJson.findOne({ cid: cid }).lean();
      if (check) {
        cid = (1000 + Math.random() * 9000).toFixed(0);
      }
      //check if cname already exists
      const checkCname = await FileJson.findOne({ cname: cname }).lean();
      if (checkCname) {
        throw new Error("Course name already exists");
      }
      //create new course
      const newCourse = await FileJson.create({
        cname: cname,
        cid: cid,
      });
      return newCourse;
    } catch (error) {
      throw error;
    }
  }
};
