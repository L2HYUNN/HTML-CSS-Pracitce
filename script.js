var obj = {a: 1, b: 10, c: 30, d: 50, e: 100};

var {a, c} = obj;
console.log(`a and c = ${a}, ${c}`);

var {a: NewA=10, f: NewF=5000} = obj
console.log(`newA and newF = ${NewA} and ${NewF}`)

console.log(obj);

var {NewA=100, f: NewF=5000} = obj
console.log(`newA and newF = ${NewA} and ${NewF}`)

// 배열의 비구조화 할당

var arr = [1, 3, 30 ,50 ,25];

var [b, c, ...rest] = arr;
console.log(`b and c and rest = ${b}, ${c}, ${rest}`);

var [a=10, f=20] = [1];
console.log(`a and f = ${a}, ${f}`);

[a, f] = [f, a];
console.log(`a and f = ${a}, ${f}`); 

function getArr() {
  return [1, 2, 3, 4, 5, 6];  
}
[a, , , , ,f] = getArr();
console.log(`a and f = ${a}, ${f}`); 