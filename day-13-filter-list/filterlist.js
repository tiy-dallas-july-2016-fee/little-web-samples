
var superheroes = [
  { name: 'The Hulk', age: 45, isGoodGuy: true },
  { name: 'The Leader', age: 54, isGoodGuy: false },
  { name: 'Captain America', age: 38, isGoodGuy: true },
  { name: 'The Red Skull', age: 49, isGoodGuy: false }
];

var theList;
var nameFilterInput;


function createDomForArray(arr) {
  theList.innerHTML = '';
  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    li.textContent = arr[i].name;
    theList.appendChild(li);
  }
}

//returns a list of heroes/villains that match the query's criteria re: name
function filterListByName(arr, queryValue) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {

    var nameContainsQuery = arr[i].name.indexOf(queryValue) > -1;
    if (nameContainsQuery) {
      var hero = arr[i];
      result.push(hero);
    }
  }

  return result;
}

function keyUpHappened() {

  var value = nameFilterInput.value;

  var filteredArray = filterListByName(superheroes, value);
  console.log('filtered', filteredArray);
  createDomForArray(filteredArray);
}


function start() {
  theList = document.querySelector('#the-list');
  createDomForArray(superheroes);

  nameFilterInput = document.querySelector('#name-filter');
  nameFilterInput.addEventListener('keyup', keyUpHappened);
}

start();
