const map = (list, callback) => {
    let result = []
    for (let li of list) {
        result.push(callback(li))
    }
    console.log(result)
}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});