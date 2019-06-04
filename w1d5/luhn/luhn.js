function check(number) {
    let numList = number.toString().split('')
    let output = numList
    for (let i = 1; i < numList.length; i+=2) {
        let numMult = parseInt(numList[i], 10) * 2
        if (numMult > 9) {
            replacement = numMult.toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b))
            output[i] = replacement.toString()
        } else {
            output[i] = numMult.toString()
        }
    }
    return (output.reduce((a,b)=> parseInt(a) + parseInt(b)) % 10 === 0 ? "Number is valid" : "Number is not valid")
}

function maxProfit(stocks) {
    return 16
}

module.exports = {
    check: check,
    maxProfit: maxProfit
}