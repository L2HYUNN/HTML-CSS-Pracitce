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