var wrapLog = function (callback, name) {
    /* your code here */
    return function() {
        console.log(arguments)
        let args = arguments[0]
        for(var i = 1; i < arguments.length; i++) {
            args = args + ', ' + arguments[i]
        }
        console.log(`${name}(${args}) => ${callback.apply(null, arguments)}`)
    }
  };
  
  var area = function (x, y) {
    return x * y;
  };
  var logArea = wrapLog(area, "area");
  
  logArea(5, 3); // area(5, 3) => 15
  logArea(3, 2); // area(3, 2) => 6
  
  var volume = function (x, y, z) {
    return x * y * z;
  };
  var logVolume = wrapLog(volume, "volume");
  
  logVolume(5, 3, 2); // volume(5, 3, 2) => 30
  logVolume(3, 2, 4); // volume(3, 2, 4) => 24