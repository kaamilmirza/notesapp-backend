const AWS = require('aws-sdk');
const config = require("../config/config")
AWS.config.update({
    credentials : config.amazonConfig,
    region : 'ap-south-1'
});

module.exports = AWS;
