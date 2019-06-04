function rstring(input) {
    var sol = ""
    var i = input.length - 1
    while(i >= 0){
        sol = sol + input[i]
        if (i === 0) {
            break
        }
        i--
    }
    return sol
}

function reverse(input) {
    let output = []
    for (let i = 0; i < input.length; i++) {
        output.push(rstring(input[i]))
    }
    return output
}

function format(finalArr) {
    for (let i = 0; i < finalArr.length; i++) {
        console.log(finalArr[i])
    }
}

var args = process.argv.slice(2)
format(reverse(args))

// 593493-20190528-2cd177be