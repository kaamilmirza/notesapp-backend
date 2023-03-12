const googleService = require('../../services/google.service');

module.exports = class googleController {
    static async apiGdrive(req, res, next){

        try{
            //Controller to run google services present under /services/google.service.js
            const driveService = await googleService.getDriveService();
            const fileId = await googleService.scanFolderForFiles(driveService,req.body.filename,req.body.filepath);
            res.json(fileId);
        }   
        catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
}
