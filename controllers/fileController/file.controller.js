const File = require('../../models/file.model');
const FileService = require('../../services/file.service');
module.exports = class fileController {
     //controller to call on the function that creates file
     static async apiCreateFile(req, res, next) {
        try {
            const file = await FileService.createFile(req.body);
            const file2 = await FileService.createFileJson(file);
            res.json({file,file2});
        } catch (e) {
            res.status(500).json(e);
        }
        //res.send.json(req.body);
    }
   
    //controller to call the function that gets all files from collection as json
    static async apiGetFiles(req, res, next){
        try{
            const files = await FileService.getFileList(req.body);
            res.json({files});
        }
        catch(e){
            res.status(500).json(e);  
        }
    }
    //controller to call the function that gets all courses json files
    static async apiGetJsonFiles(req, res, next){
        try{
            const filesjson = await FileService.getJsonFileList(req.body);
            res.json({filesjson});
        }
        catch(e){
            res.status(500).json(e);  
        }
    }
    //controller to update file if it already exists using functions in the services 
    static async apiUpdateFile(req, res, next) {
        try{
            // console.log("req");
            // console.log(req.body);
            const fileData = await FileService.updateFile(req.body);
            if(fileData){
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