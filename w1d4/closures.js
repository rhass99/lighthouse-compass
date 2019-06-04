function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
    let i = -1
  
    return function() {
      /* your code here */
      i ++
      return list[i]
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6

  var countdownGenerator = function (x) {
    /* your code here */
    var list = ['T-minus', 'Blast Off!', 'Rockets already gone, bub!'];
    let i = -1
    return function(){
        i++
        if (x - i <= x && x - i > 0) {
            console.log(`${list[0]} ${x - i}...`)
            return
        } 
        if (x - i === 0) {
            console.log(list[1])
            return
        } else {
            console.log(list[2])
            return
        }
    }
  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!