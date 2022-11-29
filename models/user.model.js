const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
    user_id: {type: String, required: true},
    name: {
        type: String,
        trim: true,
        required: true
      },
    phone_no : {
        type: Number,
    },
    email : {
        type : String,
        required :true,
    },
});

const File = mongoose.model('users', user_schema);
module.exports = File;