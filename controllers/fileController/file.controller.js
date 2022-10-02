const File = require('../../models/file.model');
const FileService = require('../../services/fileService');
module.exports = class fileController {
    //function to create a new file 
    static async apiCreateFile(req, res, next) {
        try {
            const file = await FileService.createFile(req.body);
            res.json(file);
        } catch (e) {
            res.status(500).json(e);
        }
        //res.send.json(req.body);
    }
    //function api to update a file if it already exits
    //calls the updateFile function from fileService
    static async apiUpdateFile(req, res, next) {
        try{
            // console.log("req");
            // console.log(req.body);
            const fileData = await FileService.updateFile(req.body);
            if(fileData){
            // res.send({
            //     message : "File updated successfully",
            //     statusCode: 200,
            //     data: fileData
            // });
            res.json(fileData);
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