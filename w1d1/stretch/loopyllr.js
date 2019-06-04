function loopyLighthouse(range, multiples, words) {
    for (let i = range[0]; i <= range[1]; i++) {
        if (i % multiples[0] === 0 && i % multiples[1] === 0) {
        console.log(words[0] + words[1])
        } else if (i % multiples[0] === 0 && i % multiples[1] !== 0) {
        console.log(words[0])
        } else if (i % multiples[0] !== 0 && i % multiples[1] === 0) {
        console.log(words[1])
        } else {
        console.log(i)
        }
    }
}

function loopyLighthouse2(range, multiples, words) {
    for (let i = range[0]; i <= range[1]; i++) {
        let output = ""
        if (i % multiples[0] === 0) {
            output += words[0]
        }
        if (i % multiples[1] === 0) {
            output += words[1]
        }
        return (output === "" ? i : output);
    }
}

//console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]))
console.log(loopyLighthouse2([15, 90], [2, 5], ["Batty", "Beacon"]))