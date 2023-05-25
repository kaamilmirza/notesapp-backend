const mongoose = require('mongoose');

const FileAccessSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
    unique: true
  },
  accessCount: {
    type: Number,
    default: 0
  },
  lastAccessedAt: {
    type: Date,
    default: Date.now
  }
});

const FileAccess = mongoose.model('FileAccess', FileAccessSchema);

module.exports = FileAccess;
