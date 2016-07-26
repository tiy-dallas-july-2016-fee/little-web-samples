
var myHouse = {
  bedroomCount: 5,
  bathroomCount: 2,
  stories: 1,
  squareFootage: 2200
};

console.log(myHouse);

//Note: Not the best way to do this. Don't do this.
var numberOfBedroomsDiv = document.querySelector('#number-of-bedrooms');
var starterText = numberOfBedroomsDiv.textContent;
numberOfBedroomsDiv.textContent = starterText + myHouse.bedroomCount;

//better, but not as awesome as templating, to be discussed next week
var numberOfBathroomsSpan = document.querySelector('#number-of-bathrooms');
numberOfBathroomsSpan.textContent = myHouse.bathroomCount;

var numberOfStoriesSpan = document.querySelector('#stories');
numberOfStoriesSpan.textContent = myHouse.stories;

var squareFootage = document.querySelector('#square-footage');
squareFootage.textContent = myHouse.squareFootage;
