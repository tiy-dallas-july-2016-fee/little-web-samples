var peopleList = document.querySelector('#people');


var mark = {
  name: 'Mark',
  age: 32
};



var people = [
  { name: 'Mark', age: 35 },
  { name: 'Tim', age: 32 },
  { name: 'Omar', age: 55 },
  { name: 'Ashurbanipal', age: 2700 }
];


for (var i = 0; i < people.length; i++) {
  var person = people[i];
  console.log(person, person.name, person.age);

  var str = person.name + ' (age ' + person.age + ')';

  var li = document.createElement('li');
  li.textContent = str;

  peopleList.appendChild(li);
}
