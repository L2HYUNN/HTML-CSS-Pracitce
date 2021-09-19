const str = 'Hello';

for (const item of str) {
  console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const product = [{name: '가방'}, {name: '노트북'}];

for (const item of product) {
  console.log(item);
}

const productIter = product[Symbol.iterator]();
console.log(productIter.next());
console.log(productIter.next());