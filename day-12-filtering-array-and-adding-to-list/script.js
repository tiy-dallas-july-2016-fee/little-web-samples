
var people = [
  'Batman',
  'Superman',
  'Wonder Woman',
  'The Joker',
  'The Flash',
  'Lex Luthor',
  'Shazam'
];

var filteredPeople = [];
console.log('length of filtered array at start', filteredPeople.length)

var letterChosen = 'e';

for (var i = 0; i < people.length; i++) {
  var name = people[i]; //gets the value, which is a name, out of the array at index i
  if (name.indexOf(letterChosen) >= 0) { //letter exist in name?
    filteredPeople.push(name); //adds to the end of the array
    console.log('added', name, 'length now', filteredPeople.length);
  }
  else {
    //not needed, but would be executed when letter doesn't exist in name
    console.log('skipped', name);
  }
}

//everything is review after here
var theUL = document.querySelector('#people');

for (var i = 0; i < filteredPeople.length; i++) {
  var name = filteredPeople[i];
  var li = document.createElement('li');
  li.textContent = name;
  theUL.appendChild(li);
}
