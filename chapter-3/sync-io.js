const fs = require('fs');
const path = require('path');
let buffer = fs.readFileSync(process.argv[2]);
let str = buffer.toString();
let cnt = str.split('\n');
console.log(cnt.length-1);

