console.log('hello');


var $coolList = $('#cool-list li');

function toggleHighlighting() {
  // var $currentlySelected = $('.on');
  // console.log('things', $currentlySelected);
  // $currentlySelected.removeClass('on');

  $('.on').removeClass('on');

  var $this = $(this);
  $this.addClass('on');
}

$coolList.on('click', toggleHighlighting);
