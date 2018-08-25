const net = require('net');

function parse(num){
    if(num < 10){
        return `0${num}`;
    }
    return num;
}


const server = net.createServer((socket) => {
    const d = new Date();
    socket.end(`${parse(d.getFullYear())}-${parse(d.getMonth()+1)}-${parse(d.getDate())} ${parse(d.getHours())}:${parse(d.getMinutes())}\r\n`);
    socket.end();
});

server.listen(Number(process.argv[2]));