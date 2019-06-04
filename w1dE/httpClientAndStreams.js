var fs = require('fs')
var https = require('https')

// Server

// const server = require('http').createServer()

// server.on("request", (req, res) => {
//     const src = fs.createReadStream('./readme.txt')
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     src.pipe(res);
// })

// server.listen(8000, () => {
//     console.log("listening")
// })

// Client

var options = {
    host: 'www.google.com',
    path: '/'
};

var callback = function(response) {
    console.log('In response handler callback!');
  
    response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
      console.log(chunk.toString());
    });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");