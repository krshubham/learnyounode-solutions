const fs = require('fs');
const path = require('path');
/**
 * 
 * @param {String} dir Name of the directory
 * @param {String} ext Extension of the file
 * @param {Function} cb Callback (err,data)
 */
module.exports = (dir, ext, cb) => {
    fs.readdir(dir, (err, data) => {
        if(err) return cb(err,null);
        let res = [];
        data.forEach((name) => {
            if(name.indexOf(`.${ext}`) !== -1){
                res.push(name);
            }
        });
        return cb(null, res);
    });
}