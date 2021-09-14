function sum(...args) {
  var total = 0;
  for ( var n = 0; n < args.length; n++ ) {
    total += args[n];
  }
  console.log(args.indexOf(1));
  return total;
  
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function sum2(a, b, ...others) {
  var total = a + b;
  for ( var n = 0; n < others.length; n++ ) {
    total += others[n];
  }
  return total;
}

console.log(sum2(1,2))
console.log(sum2(1,2,3,4))

