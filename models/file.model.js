const mongoose = require('mongoose');
const file_schema = mongoose.Schema({
    g_id : {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
      },
    year: {
      type : Number,
    } ,
    branch: {
      type : String,
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
        type: String
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
    }
});

const File = mongoose.model('files', file_schema);
module.exports = File;