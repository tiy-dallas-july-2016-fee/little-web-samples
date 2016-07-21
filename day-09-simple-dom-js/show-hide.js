
var theButton = document.querySelector('.show-hide button');
var theList = document.querySelector('.show-hide ul');

function buttonClicked() {
  console.log('clicked!');

  theList.classList.toggle('hidden');
}

theButton.addEventListener('click', buttonClicked);
