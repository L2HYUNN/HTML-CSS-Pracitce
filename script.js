const div1E1 = document.getElementById('div1');

console.log(div1E1.innerHTML);

console.log(div1E1.nodeType);
console.log(div1E1.nodeType === Node.ELEMENT_NODE);
console.log(div1E1.constructor);
console.log(div1E1 instanceof HTMLDivElement);
console.log(div1E1 instanceof HTMLElement);
console.log(div1E1 instanceof Element);
console.log(div1E1 instanceof Node);
console.log(Element.prototype);
console.log(div1E1.tagName);

const div1El2 = document.querySelector('#div1');
console.log(div1El2.innerHTML);

const liEls = document.querySelectorAll('ul li');
console.log(liEls.item(0).innerHTML);
console.log(liEls.item(1).textContent);