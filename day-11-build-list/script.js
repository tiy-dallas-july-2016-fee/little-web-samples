var theList = document.querySelector('#the-list');

var lunchPossibilities = [
  'Subway',
  'Serj',
  'Jus-Mex',
  '7-11',
  'Trolley Stop',
  'Mad Hatter',
  'McDonalds'
];

for (var i = 0; i < lunchPossibilities.length; i++) {
  var restaurant = lunchPossibilities[i];
  console.log(i, restaurant);

  var li = document.createElement('li');
  li.textContent = restaurant;
  theList.appendChild(li);
}
