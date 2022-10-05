const File = require('../models/file.model.js');
//  searches for the file in the db and creates new if doesnt exist 
// updates the file if it already exists
module.exports = class FileService{
    
    static async getFileList({ filters = null , page = 0, filesPerPage = 20 } = {}) {
        let query;
        if (filters) {
            if ("name" in filters) {
                query = { name: { $regex: filters["name"], $options: "i" } }
            } else if ("year" in filters) {
                query = { year: filters["year"] }
            } else if ("branch" in filters) {
                query = { branch: filters["branch"] }
            } else if ("course" in filters) {
                query = { course: filters["course"] }
            } else if ("semester" in filters) {
                query = { semester: filters["semester"] }
            } else if ("version" in filters) {
                query = { version: filters["version"] }
            } else if ("unit" in filters) {
                query = { unit: filters["unit"] }
            } else if ("wdlink" in filters) {
                query = { wdlink: filters["wdlink"] }
            }
        }
        let cursor;
        try {
            cursor = await File.find(query);
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { file_list: [], total_num_files: 0 }
        }
        
    }
        if (filters) {
            if ("name" in filters) {
                cursor = cursor.sort({ name: 1 })
            } else if ("year" in filters) {
                cursor = cursor.sort({ year: 1 })
            } else if ("branch" in filters) {
                cursor = cursor.sort({ branch: 1 })
            } else if ("course" in filters) {
                cursor = cursor.sort({ course: 1 })
            } else if ("semester" in filters) {
                cursor = cursor.sort({ semester: 1 })
            } else if ("version" in filters) {
                cursor = cursor.sort({ version: 1 })
            } else if ("unit" in filters) {
                cursor = cursor.sort({ unit: 1 })
            } else if ("wdlink" in filters) {
                cursor = cursor.sort({ wdlink: 1 })
            }
        }

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