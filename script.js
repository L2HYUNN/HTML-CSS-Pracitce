/*
var sayName;

sayName();

sayName = function(){
  console.log('yuddomack');
}

sayName();

var sayName = function(){
  console.log('yuddomack');
}
*/ 
// var 변수의 호읻스팅 및 함수 변수 우선순위


var myName = "hi";

function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

var yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);

// 결과 아래) 


var myName;
var yourName;
function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

myName = "hi";
yourName = "bye";

console.log(typeof myName);
console.log(typeof yourName);

