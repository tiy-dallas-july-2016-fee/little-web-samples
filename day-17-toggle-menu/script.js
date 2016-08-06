var toggleMenuDiv = document.querySelector('#toggle-menu');
var menu = document.querySelector('.menu');

function toggleClicked() {
  console.log('yo');
  menu.classList.toggle('show');
}

toggleMenuDiv.addEventListener('click', toggleClicked);
