const fs = require('fs');

fs.readFile(process.argv[2], (err,data) => {
    if(err) process.exit(1);
    console.log(data.toString().split('\n').length-1);
});