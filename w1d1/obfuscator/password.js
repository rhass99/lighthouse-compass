function obf(plainPassword) {
    const values = {
        "a": "4",
        "e": "3",
        "o": "0",
        "l": "1"
    }
    var encrypted = plainPassword.split("")
    for (let i = 0; i < plainPassword.length; i++) {

        if (values.hasOwnProperty(plainPassword[i])) {
            encrypted[i] = values[plainPassword[i]]
        }
    }
    return encrypted.join("")
}

function obfuscator(plain) {
    const values = {
        "a": "4",
        "e": "3",
        "o": "0",
        "l": "1"
    }
    var encrypted = ""
    for (let i = 0; i < plain.length; i++) {
        if (values.hasOwnProperty(plain[i])) {
            encrypted += values[plain[i]]
        } else {
            encrypted += plain[i]
        }
    }
    return encrypted
}

console.log(obf2(process.argv[2]))