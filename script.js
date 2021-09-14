function checkNumber(val) {
  if (typeof val !== 'number' ) throw '유효하지 않은 값이다.';
  console.log('숫자형 값으로 확인되었습니다.');
}
try{
  checkNumber(100);
  checkNumber('wrong type');
} catch(e) {
  console.log(`에러가 발상했습니다 > ${e}`);
} finally {
  console.log('완료');
}
