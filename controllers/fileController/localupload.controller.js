const { upload } = require('../../middleware/localUpload');
const localUpload = require('../../middleware/localUpload');
const { updateFile } = require('../../services/file.service');

module.exports = class localUploadController {
    static async apiLocalUpload(req, res, next){
        try{
            //Controller to run google services present under /services/google.service.js
            const upload = await localUpload.upload(req,res,next);
            res.send("Success");
        }   
        catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
}
