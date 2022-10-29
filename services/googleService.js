const fs = require('fs');
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const multer = require('multer');

const upload = multer();
const constants = require('../constants/googleDriveApi');
const { file } = require('googleapis/build/src/apis/file');
// If modifying these scopes, delete token.json.
module.exports = class GoogleService {
static async getDriveService() {
  const KEYFILEPATH = 'D:/Programminglearning/notesapp-backend/notesapp-364320-a9fd54b361bf.json';
  const SCOPES = ['https://www.googleapis.com/auth/drive'];
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: 'v3', auth });
  return driveService;
};
static uploadSingleFile = async (getDriveService,fileName,filePath) => {
    const drive = getDriveService;
    const fName = fileName;
    const fPath = filePath;
    
    //folderId is the id of the folder inside of the gdrive
    const folderId = '1VZ5shZrzacC4eDTo03C6Z1Wb0PLrARSg';
    const readStream = fs.createReadStream(path.join(fPath,fName));

    const { data: { id, name } = {} } = await drive.files.create({
      resource: {
        name: fName,
        parents: [folderId],
      },
      media: {
        mimeType: 'application/pdf',
        body: readStream,
      },
      fields: 'id,name',
    });
    // console.log('File Uploaded', name);
    return id;
  };
  
  static scanFolderForFiles = async (driveService, filename, folderPath) => {
    const drive = driveService;
    var fileId = null;
      if (filename.endsWith('.pdf')) {
        try{
          fileId = await this.uploadSingleFile(driveService, filename, folderPath);
        }
        catch(error){
          console.log(error);
        }
      }
      const wcl = await drive.files.get({
          fileId: fileId,
          fields: 'webViewLink, webContentLink',
        });
      const result = {
        fileId : fileId,
        webContentLink : wcl["data"]["webViewLink"]
      }
      return result;
  };
}


