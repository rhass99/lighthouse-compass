let https = require('https')

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, (response) => {
        var bufs = ''
        response.setEncoding('utf8')
        response.on('data', (data) => {
            bufs += data
        })
        response.on('end', () => {
            callback(bufs)
        })
    })
  
}
  
function printHTML (html) {
    console.log(html);
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)