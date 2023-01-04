const mongoose = require('mongoose');
const file_schema = mongoose.Schema({
    cid  : {type: Number , required : true},
    cname: {
        type: String,
      },
      g_id: {type: Array},
});

const File = mongoose.model('files_jsons', file_schema);
module.exports = File;