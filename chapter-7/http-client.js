const http = require('http');

http.get(process.argv[2], (res) => {
   res.on('data', (data) => {
       console.log(data.toString());
   })
   .on('error', (err) => {
       console.log(err);
   });
})
.on('error', (err) => {
    console.log(err);
});

