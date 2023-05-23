const AWS = require('aws-sdk');
const config = require("../config/config")
AWS.config.update({
    credentials : config.amazonConfig,
    region : 'ap-south-1'
});
const s3 = new AWS.S3();
module.exports = s3;
