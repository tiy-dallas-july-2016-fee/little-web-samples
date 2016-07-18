console.log('hooked up!');

var theList = document.querySelector('#the-list');
console.log('theList', theList);

function createListItem(food) {
  console.log('called createListItem');

  var newListItem = document.createElement('li');
  newListItem.textContent = food;
  theList.appendChild(newListItem);
}

// createListItem('taco');
// createListItem('queso');
// createListItem('chips');

var food = ['steak', 'shrimp', 'wings', 'chips', 'queso', 'fajitas', 'taco'];

for (var i = 0; i < food.length; i++) {
  var foodName = food[i];
  createListItem(foodName);
}
