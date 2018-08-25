const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const stream = fs.createReadStream(process.argv[3]);
    stream.pipe(res)
    .on('end', () => {
        res.end();
    });
});

server.listen(Number(process.argv[2]));
