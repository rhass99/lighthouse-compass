var fs = require('fs')

const server = require('http').createServer()

server.on("request", (req, res) => {
    const src = fs.createReadStream('./hi.txt')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    src.pipe(res);
})

server.listen(8000, () => {
    console.log("listening")
})
