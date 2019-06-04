// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(x => {
    if (x === "Waldo") {
      found();   // execute callback
    }
  })
}
  
function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);