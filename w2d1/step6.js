var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function print_uppercase(html) {
    console.log(html.toUpperCase())
}
function print_lowercase(html) {
    console.log(html.toLowerCase())
}
function print_reverse(html) {
    console.log(html.split('').reverse().join(''))
} 
// function print_1337(html) {

// }


getHTML(requestOptions, print_uppercase)