function sum() {
  var total = 0;
  for ( var n = 0; n < arguments.length; n++ ) {
    total += arguments[n];
  }
  console.log(arguments instanceof Array);
  return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testarg() {
  var oldArr = arguments;
  var newArr = Array.prototype.slice.call(arguments);
  console.log(`oldArr = ${oldArr}, newArr = ${newArr}`);
  console.log(newArr.indexOf('b'));
  console.log(arguments.indexOf('b'));
}

testarg('a', 'b');