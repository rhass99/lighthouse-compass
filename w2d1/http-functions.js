let https = require('https')

module.exports = function getHTML (options, callback) {

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