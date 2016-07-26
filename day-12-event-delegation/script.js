
var theUL = document.querySelector('#the-list');

theUL.addEventListener('click', function(evt) {
  console.log('what is?', evt.target, evt.target.tagName);

  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('selected');
  }
});
