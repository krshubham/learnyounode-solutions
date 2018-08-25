const http = require('http');

queue = [];
let count = 0;

function help(i){
    return (res) => {
        let str = '';
        res.on('data', (data) => {
            str += data;
        })
        .on('end', () => {
            count++;
            queue[i] = str.toString();
            if(count === 3){
                queue.forEach(element => {
                    console.log(element);
                });
            }
        });
    }
}


for(let i = 0; i < 3; i++){
    http.get(process.argv[i+2], help(i));
}