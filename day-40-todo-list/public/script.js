'use strict';
if (this.ToDo === undefined) this.ToDo = {};

(function(context) {

  function templateListItem(textEntered, id) {
    var templateHtml = $('#list-item-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc({
      text: textEntered,
      id: id
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
        //id <-

        templateListItem(textEntered, responseDataFromTheServer.id);
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
        templateListItem(task.text, task.id);
      });
    });
  }

  function deleting(evt) {
    var $target = $(evt.target);
    var id = $target.data('id');

    $.ajax({
      url: 'api/todo/' + id,
      method: 'DELETE'
    })
    .done(function() {
      $target.parent().remove();
    });
  }

  function start() {

    $('#item-input').on('keyup', keyUpHappened);
    getInitialData();
    $('.list').on('click', '.delete-button', deleting);
  }

  context.start = start;

})(window.ToDo);
