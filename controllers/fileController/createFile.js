const File = require('../../models/file.model.js');

exports.createFile = async function (req, res) {
    try{
    let g_id = req.body.g_id;
    let name = req.body.name;
    let year = req.body.year;
    let branch = req.body.branch;
    let course = req.body.course;
    let semester = req.body.semester;
    let version = req.body.version;
    let unit = req.body.unit;
    let wdlink = req.body.wdlink;

    console.log(g_id,
        name,
        year,
        branch,
        course,
        semester,
        version,
        unit,
        wdlink);
    
    const newfile = await new File({
        g_id: g_id,
        name: name,
        year: year,
        branch: branch,
        course: course,
        semester: semester,
        version: version,
        unit: unit,
        wdlink: wdlink,
    }).save();

    res.send(newfile);
     }
    catch (error) {}

};
