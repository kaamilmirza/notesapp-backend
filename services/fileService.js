
const File = require('../models/file.model.js');
//  searches for the file in the db and creates new if doesnt exist 
// updates the file if it already exists
module.exports = class FileService{
    static async createFile(body) {
        let fileDoc = await File.findOne({
            g_id: body.g_id,
        });
        if (!fileDoc) {
            const newFileDoc = await File.create({
                g_id: body.g_id,
                name: body.name,
                year: body.year,
                branch: body.branch,
                course: body.course,
                semester: body.semester,
                version: body.version,
                unit: body.unit,
                wdlink: body.wdlink,
            });
            return newFileDoc;
        }
        else{
            this.updateFile(body);
        }
        
    }
    static async updateFile(body) {
        // console.log("Reached update file..service")
        // console.log(body);
        const fileDoc = await File.findOne({
            g_id: body.g_id,
            });
        if (fileDoc) {
            // console.log("File found");
            // console.log(fileDoc);
            fileDoc.name = body.name;
            fileDoc.year = body.year;
            fileDoc.branch = body.branch;
            fileDoc.course = body.course;
            fileDoc.semester = body.semester;
            fileDoc.version = body.version;
            fileDoc.unit = body.unit;
            fileDoc.wdlink = body.wdlink;
            // console.log("File updated");
            // console.log(fileDoc);
            const updatedFile = await fileDoc.save();
            return updatedFile;
        }
        else{
            return null;
        }  
    }
}