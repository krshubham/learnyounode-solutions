const http = require('http');

http.get(process.argv[2],(stream) => {
    let str = '';
    let c = 0;
    stream.on('data', (data) => {
        str += data;
        for(let i of data){
            c++;
        }
    })
    .on('end', () => {
        console.log(c);
        console.log(str);
    })
    .on('error', (err) => {
        console.log(err);
    });
})
.on('error', (err) => {
    console.log(err);
});