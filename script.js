const str = '12345678';

const fromArr = Array.from(str, el => el *2);

console.log(fromArr);

const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Madrid,Spain
Rome,Italy`;

capitals.split('\n').forEach(s => {
  const capital = s.split(',')[0];
  const country = s.split(',')[1];
  console.log(`${capital} is in ${country}`);
});