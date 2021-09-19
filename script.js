Date.daysdiff = (date1, date2) => {
  if( !(date1 instanceof Date) || !(date2 instanceof Date) ) return " ";

  const d1 = date1.getTime();
  const d2 = date2.getTime();

  let diff = d2 - d1;

  const seconds = Math.floor( ( diff = diff / 1000 ) % 60 );
  const minutes = Math.floor( ( diff = diff / 60 ) % 60 );
  const hours = Math.floor( ( diff = diff / 60 ) % 24 );
  const days = Math.floor( ( diff = diff / 24 ));
  const years = Math.floor( diff / 365 );
  return `${years} years ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

const from = new Date(2000, 0 ,1);
const to = new Date(2010, 0, 1);

console.log(from);
console.log(to);
console.log(Date.daysdiff(from ,to));