const mongoose = require("mongoose");
const file_schema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
  },
  branch: {
    type: String,
  },
  course: String,
  semester: Number,
  version: Number,
  unit: Number,
  reslink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  fileId: {
    type: String,
    trim: true,
    required: true,
  },
  author: {
    type: String,
    trim: true,
    required: true,
  },
  authorId: {
    type: String,
    trim: true,
    required: true,
  },
  accessToday: {
    type: Number,
    default: 0,
  },
  accessWeekly: {
    type: Number,
    default: 0,
  },
});

const File = mongoose.model("files", file_schema);
module.exports = File;
