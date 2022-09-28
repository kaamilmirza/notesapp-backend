const File = require('../../models/file.model');
const FileService = require('../../services/fileService');
module.exports = class fileController {
    static async apiCreateFile(req, res, next) {
        try {
            const file = await FileService.apiCreateFile(req.body);
            res.json(file);
        } catch (e) {
            res.status(500).json(e);
        }
        //res.send.json(req.body);
    }

    static async apiUpdateFile(req, res, next) {
        const fileData = await FileService.updateFile(req.body);
        try{
            if(fileData){
            res.send({
                message : "File updated successfully",
                statusCode: 200,
                data: fileData
            });
        }
        else{
            res.status(400).send({msg : "File not updated"});
        }
        }catch (error) {
            console.log(error);
            res.status(400).json({error : error});

        }
    }
}