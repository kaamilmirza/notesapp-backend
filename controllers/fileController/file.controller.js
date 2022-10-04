const File = require('../../models/file.model');
const FileService = require('../../services/fileService');
module.exports = class fileController {
    static async apiGetFiles(req, res, next) {
        const filesPerPage = req.query.filesPerPage ? parseInt(req.query.filesPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
        let filters = {}
        if (req.body.name) {
            filters.name = req.body.name
        } else if (req.body.year) {
            filters.year = req.body.year
        } else if (req.body.branch) {
            filters.branch = req.body.branch
        } else if (req.body.course) {
            filters.course = req.body.course
        } else if (req.body.semester) {
            filters.semester = req.body.semester
        } else if (req.body.version) {
            filters.version = req.body.version
        } else if (req.body.unit) {
            filters.unit = req.body.unit
        } else if (req.body.wdlink) {
            filters.wdlink = req.body.wdlink
        }
        const { file_list, total_num_files } = await FileService.getFileList({
            filters,
            page,
            filesPerPage,
        })
        let response = {
            files: file_list,
            page: page,
            filters: filters,
            entries_per_page: filesPerPage,
            total_results: total_num_files,
        }
        res.json(response)
    }

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