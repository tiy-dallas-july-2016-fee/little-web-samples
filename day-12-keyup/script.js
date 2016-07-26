
var theInput = document.querySelector('#theInput');
var outputDiv = document.querySelector('#output');

//version that updates when the enter key is pressed
theInput.addEventListener('keyup', function(evt) {
  if (evt.keyCode == 13) {
    var value = theInput.value;
    outputDiv.textContent = value;
  }
});

//version that updates all the time
//
// theInput.addEventListener('keyup', function() {
//   var value = theInput.value;
//   outputDiv.textContent = value;
// });
