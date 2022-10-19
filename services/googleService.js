const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const multer = require('multer');

const upload = multer();
const constants = require('../constants/googleDriveApi');
// If modifying these scopes, delete token.json.
module.exports = class GoogleService {
    
}


