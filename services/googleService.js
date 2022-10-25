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
static async getDriveService() {
  const KEYFILEPATH = path.join(__dirname, 'service.json');
  const SCOPES = ['https://www.googleapis.com/auth/drive'];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: 'v3', auth });
  return driveService;
};
static uploadSingleFile = async (fileName, filePath) => {
    const drive = this.getDriveService;
    const folderId = 'DRIVE_FOLDER_ID';
    const { data: { id, name } = {} } = await drive.files.create({
      resource: {
        name: fileName,
        parents: [folderId],
      },
      media: {
        mimeType: 'application/pdf',
        body: fs.createReadStream(filePath),
      },
      fields: 'id,name',
    });
    console.log('File Uploaded', name, id);
  };
  
  static scanFolderForFiles = async (folderPath) => {
    const folder = await fs.promises.opendir(folderPath);
    for await (const dirent of folder) {
      if (dirent.isFile() && dirent.name.endsWith('.pdf')) {
        await uploadSingleFile(dirent.name, path.join(folderPath, dirent.name));
        await fs.promises.rm(filePath);
      }
    }
  };

}


