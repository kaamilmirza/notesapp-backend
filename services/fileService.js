
const File = require('../models/file.model.js');

module.exports = class FileService{
    static async createFile(body) {
        // let fileDoc = await File.create({
        //     g_id: body.g_id,
        //     name: body.name,
        //     year: body.year,
        //     branch: body.branch,
        //     course: body.course,
        //     semester: body.semester,
        //     version: body.version,
        //     unit: body.unit,
        //     wdlink: body.wdlink,
        // });
        // console.log(fileDoc);
        let fileDoc = await body.findOne({
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

    }
    static async updateFile(bodyData, fileID) {
        const fileData = await File.findByIdAndUpdate(fileID,{
            g_id: bodyData.g_id,
            name: bodyData.name,
            year: bodyData.year,
            branch: bodyData.branch,
            course: bodyData.course,
            semester: bodyData.semester,
            version: bodyData.version,
            unit: bodyData.unit,
            wdlink: bodyData.wdlink,
        });
        }

}