const http = require('http');

const server = http.createServer((req,res) => {
    if(req.method === 'POST'){
        let body = '';
        req.on('data', (data) => {
            body += (data.toString().toUpperCase());
        })
        .on('end', () => {
            res.end(body);
        });
    }
});


server.listen(Number(process.argv[2]));