num = process.argv[2]

function roll(num) {
    nums = []
    for (let i = 0; i < num; i++) {
        nums.push(Math.floor(Math.random() * 6) + 1)
    }
    return nums
}

console.log(roll(num))