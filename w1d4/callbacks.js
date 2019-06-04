const add2 = (number, cb) => new Promise((resolve, reject) => {
        let num = undefined
        setTimeout(y = function() {
            num = number + 2
            resolve(cb(num))
        }, 1000)
})


add2(4, function(number){
    return ("line 10: ", number)
}).then(numberedReturn => console.log("Number has been returned from the function: ",numberedReturn))

