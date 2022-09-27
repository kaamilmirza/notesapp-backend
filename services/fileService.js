const File = require('..//models/file.model.js');

module.exports = class FileService{
    static async apiCreateFile(body, res, next) {
        let fileDoc = await File.create({
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
        console.log(fileDoc);
    }
}