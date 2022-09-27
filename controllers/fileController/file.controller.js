const File = require('../../models/file.model');
module.exports = class fileController {
    static async apiCreateFile(req, res, next) {
        try {
            const file = await File.create(req.body);
            res.json(file);
        } catch (e) {
            res.status(500).json(e);
        }
        //res.send.json(req.body);
    }
}