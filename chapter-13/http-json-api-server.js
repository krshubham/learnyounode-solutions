const http = require('http');
const url = require('url');

const portNumber = process.argv[2];

const server = http.createServer(function(request, response){
    let q = url.parse(request.url, true);
    let jsonObj = {};
    
    response.writeHead('200', {'Content-Type': 'application/json'});
    let date = new Date(q.query['iso']);
    
    if(q.pathname === '/api/parsetime'){
        jsonObj.hour = date.getHours();
        jsonObj.minute = date.getMinutes();
        jsonObj.second = date.getSeconds();
        
        response.write(JSON.stringify(jsonObj));
        
    } else if (q.pathname === '/api/unixtime'){
        jsonObj.unixtime = date.getTime();
        
        response.write(JSON.stringify(jsonObj));
    }
    response.end();
});

server.listen(portNumber);

