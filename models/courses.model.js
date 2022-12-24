const mongoose = require('mongoose');
const file_schema = mongoose.Schema({
    _id  : {type:String , required : true},
    g_id: {type: String, required: true},
    name: {
        type: String,
        trim: true,
      },
    course: String,

});

const File = mongoose.model('files_json', file_schema);
module.exports = File;