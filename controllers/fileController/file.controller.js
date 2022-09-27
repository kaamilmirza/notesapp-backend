
module.exports = class File {
    static async apiCreateFile(req, res, next) {
        try {
            const file = await File.create(req.body);
            res.json(file);
        } catch (e) {
            res.status(500).json({ message: 'Server error' });
        }
    }
}