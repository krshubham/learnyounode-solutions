const fs = require('fs');

fs.readdir(process.argv[2],(err, data) => {
    if(err) process.exit(1);
    for(let i = 0; i < data.length; i++){
        if(data[i].indexOf(`.${process.argv[3]}`) !== -1){
            console.log(data[i]);
        }
    }
});
