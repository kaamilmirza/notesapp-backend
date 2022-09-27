var mongoose = require('mongoose');
const file_scheme = new mongoose.Schema({
    g_id: {type: String, required: true},
    name: {
        type: String,
        trim: true,
      },
    year: {
      type : Number,
      enum : ['1','2','3','4'],
    } ,
    branch: {
      type : String,
      enum : ["CSE","ECE","EEE","MECH","CIVIL","IT","MBA","MCA","CSIT","AIML","CS-DS","CSC"],
    },
    course: String,
    semester: Number,
    version: Number,
    unit: Number,
    wdlink: String,
});
module.exports = ('file_scheme;', file_scheme);
