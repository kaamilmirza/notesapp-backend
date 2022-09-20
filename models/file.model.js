var mongoose = require('mongoose');
const file_scheme = new mongoose.Schema({
    g_id: {type: String, required: true},
    name: {
        type: String,
        trim: true,
      },
    year: Number,
    branch: String,
    course: String,
    semester: Number,
    version: Number,
    unit: Number,
    wdlink: String,
});
module.exports = ('file_scheme;', file_scheme);
