const mongoose = require('mongoose');

const FileAccessSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
    unique: true
  },
  
});

const FileAccess = mongoose.model('FileAccess', FileAccessSchema);

module.exports = FileAccess;
