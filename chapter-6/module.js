const helper = require('./filter');

const dir = process.argv[2];
const ext = process.argv[3];

helper(dir,ext,(err, data) => {
    if(err) process.exit(1);
    data.forEach(element => {
        console.log(element);
    });
});