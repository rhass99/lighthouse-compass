var fs = require('fs')

fs.readFile('./txt.txt', 'utf-8', (err, contents) => {
    let nums = contents.split('\n')
    let sum = 0
    for (num in nums) {
        sum += parseInt(num, 10)
        console.log(sum)
    }
    console.log(sum)
})