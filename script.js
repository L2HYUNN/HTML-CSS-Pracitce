const testStringify = {
  stringifiedNum: JSON.stringify(13.1),
  stringifiedStr: JSON.stringify("Carnival"),
  stringifiedBln: JSON.stringify(false),
  stringifiedArr: JSON.stringify([2003, 2006]),
};

for ( let key in testStringify) {
  console.log(`@@@@@@@ ${key} @@@@@@@`);
  console.log(typeof testStringify[key]);
  console.log(testStringify[key]);
}

const obj = { 
  drama: 'PET',
  season: 2017,
  casting: ['koyuki', 'matsumoto jun'],
  character: ['sumire', 'momo']
};

const jsonObj = JSON.stringify(obj);
console.log( typeof jsonObj );
console.log( jsonObj );
console.log(JSON.stringify(obj, ['drama', 'season']));
console.log(JSON.stringify(obj, null, 4 )); 
console.log(JSON.stringify(obj, (key, val) => {
  if( val == 2017 ) return 2099;
  return val; 
}, 4));