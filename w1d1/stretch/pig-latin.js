function prPigLatin(input) {
    var sol = input.slice(1) + input[0] + "ay"
    return sol
}

function pigLatin(input) {
    let output = []
    for (let i = 0; i < input.length; i++) {
        output.push(prPigLatin(input[i]))
    }
    return output
}

function format(finalArr) {
    var final = ""
    for (let i = 0; i < finalArr.length; i++) {
        final = final + " " + finalArr[i]
    }
    console.log(final)
}

var args = process.argv.slice(2)
format(pigLatin(args))