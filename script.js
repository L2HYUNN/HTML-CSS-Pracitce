const printArguments = (...args) => {
  let total = 0;
  for( let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
} 
let result = printArguments(1, 2, 3);

console.log(result);

function sum() {
  let total = 0;
 for( let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
} 
let result2 = sum(1, 2, 3);

console.log(result2);

