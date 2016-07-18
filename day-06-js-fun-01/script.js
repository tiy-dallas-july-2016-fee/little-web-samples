console.log('loaded this!');

var sum = 7 + 16;

console.log(sum);


var para = window.document.querySelector('p');
console.log(para);
para.textContent = 'Hello class!';

var listItems = document.querySelectorAll('li');
console.log('the list items', listItems);


var first = listItems[0];
console.log('the first', first);

first.textContent = 'I changed this!';
