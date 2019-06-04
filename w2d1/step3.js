let https = require('https')

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML (requestOptions) {
  
    /* Add your code here */
    https.get(requestOptions, (response) => {
        var bufs = []
        response.setEncoding('utf8')
        response.on('data', (data) => {
            bufs.push(data)
        })
        response.on('end', () => {
            for (let buf of bufs) {
                console.log(buf)
            }
        })
    })
  
  }
getAndPrintHTML(requestOptions)