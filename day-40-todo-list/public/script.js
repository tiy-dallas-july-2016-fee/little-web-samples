'use strict';
if (this.ToDo === undefined) this.ToDo = {};

(function(context) {


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

        var templateHtml = $('#list-item-template').html();
        var templateFunc = _.template(templateHtml);
        var html = templateFunc({
          text: textEntered
        });
        $('.list').append(html);
      });
    }
  }

  function start() {

    $('#item-input').on('keyup', keyUpHappened);

  }

  context.start = start;

})(window.ToDo);
