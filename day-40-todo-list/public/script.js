'use strict';
if (this.ToDo === undefined) this.ToDo = {};

(function(context) {

  function templateHtml(textEntered) {
    var templateHtml = $('#list-item-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc({
      text: textEntered
    });
    $('.list').append(html);
  }

  function keyUpHappened(evt) {
    if (evt.keyCode === 13) {
      //hit enter
      var textEntered = $('#item-input').val();

      $.ajax({
        url: 'api/todo',
        method: 'POST',
        data: {
          text: textEntered,
          isComplete: false
        }
      })
      .done(function(responseDataFromTheServer) {
        //isComplete <- false
        //id <- responseDataFromTheServer.id

        templateHtml(textEntered);
      });
      $('#item-input').val('');
    }
  }

  function getInitialData() {
    $.ajax({
      url: 'api/todo'
    })
    .done(function(responseFromGET) {
      //responseFromGET.list
      responseFromGET.list.forEach(function(task) {
        templateHtml(task.text);
      });
    });
  }

  function start() {

    $('#item-input').on('keyup', keyUpHappened);
    getInitialData();
  }

  context.start = start;

})(window.ToDo);
