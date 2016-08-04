var $guessButton = $('#guess-button');
var $theNumberInput = $('#the-number');
var $output = $('#output');
var $startOverButton = $('#start-over');

var randomNumber = Math.ceil(Math.random() * 10);
var guessCount = 0;

console.log($guessButton, $theNumberInput, $output, randomNumber);

function endOfGameScenario() {
  $startOverButton.show();
}

function guessed() {
  guessCount++;

  var valueGuessed = $theNumberInput.val();
  valueGuessed = parseInt(valueGuessed)

  if (valueGuessed === randomNumber) {
    $output.html('You are a wiener!');
    endOfGameScenario();
  }
  else {

    if (guessCount === 3) {
      $output.html('You are the ultimate loser!');
      endOfGameScenario();
    }
    else if (valueGuessed < randomNumber) {
      $output.html('higher!');
    }
    else {
      $output.html('lower!');
    }

  }
}

function resetGame() {
  randomNumber = Math.ceil(Math.random() * 10);
  guessCount = 0;
  $output.html('');
  $theNumberInput.val('');
  $startOverButton.hide();
}

$guessButton.on('click', guessed);

$startOverButton.on('click', resetGame);







// Above is game
// Below is list stuff

var listItems = $('#cool-list li');
console.log('list items', listItems);

listItems.on('click', function() {
  //this is the DOM element you clicked on
  //this is equivalent to evt.target in regular DOM addEventListener speak
  var $this = $(this);
  //$this is the jQuery wrapper, which has the DOM element you clicked on inside it

  console.log('what is this?', this, $this);
  $this.css('font-size', '40px');

  $('body').css('background-color', '#000');
});
