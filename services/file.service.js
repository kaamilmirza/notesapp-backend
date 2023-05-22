const aws = require("../services/AWS.service");
const config = require("../config/config");
const fs = require('fs');
const s3 = new aws.S3();
module.exports = class fileService {
    static async uploadfile(req){
        try{
            const fileExt = req.file;
            const fileData = fs.readFileSync(fileExt.path);            const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
            const uploadResult = s3.upload({
                Bucket : config.amazonBuckets.bucket,
                Key: fileName,
                Body: fileData,
            }).promise();
            fs.unlinkSync(fileExt.path);
            const location = (await uploadResult).Location;
            return {
                fileName : fileExt.originalname,
                location : location
            };
        }catch(error){
            throw error;
        }
    }
    static async createFile(req){
        // try{
        //     const fileDoc = await File.findOne({
                
        //     })
        // }
    }
}
