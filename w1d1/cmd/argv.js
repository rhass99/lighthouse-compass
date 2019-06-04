function addCMD(args) {
    const reducer = (a, b) => parseInt(a) + parseInt(b)
    return args.reduce(reducer)
}

var args = process.argv
console.log(addCMD(args.slice(2)))