const mongoose = require('mongoose');

const FileAccessSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
    unique: true
  },
  accessToday: {
    type: Number,
    default: 0
  },
  accessWeekly: {
    type: Date,
    default: 0
  }
});

const FileAccess = mongoose.model('FileAccess', FileAccessSchema);

module.exports = FileAccess;
