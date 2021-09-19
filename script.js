const result = {
    floor: [],
    ceil: [],
    round: []
}
let max = 1000000000;
for(let i = 0; i < max; i++) {
  const rand = Math.random() * 10;
  const f = Math.floor(rand);
  const c = Math.ceil(rand);
  const r = Math.round(rand);
  
  result.floor[f] = result.floor[f] + 1 || 1;
  result.ceil[c] = result.ceil[c] + 1 || 1;
  result.round[r] = result.round[r] + 1 || 1;
}

Object.keys(result).forEach(key => {
  let data = result[key];
  for(let i = 0; i < data.length; i ++){
    data[i] = data[i] / max * 100 + '%';
  }
});
console.log(result);


