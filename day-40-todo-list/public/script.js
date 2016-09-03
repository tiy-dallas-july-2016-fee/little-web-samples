'use strict';
if (this.ToDo === undefined) this.ToDo = {};

(function(context) {

  function templateListItem(textEntered, id, isComplete) {

    var className = '';
    if (isComplete === 'true') {
      className = 'mark-completed';
    }

    var templateHtml = $('#list-item-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc({
      text: textEntered,
      id: id,
      className: className
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

        templateListItem(textEntered, responseDataFromTheServer.id, false);
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
        templateListItem(task.text, task.id, task.isComplete);
      });
    });
  }

  function deleting(evt) {
    evt.stopPropagation();

    console.log('deleting');
    var $target = $(evt.target);
    var id = $target.parent().data('id');

    $.ajax({
      url: 'api/todo/' + id,
      method: 'DELETE'
    });
    $target.parent().remove();
  }

  function markDone(evt) {
    console.log('mark done');
    var $target = $(evt.target);
    $target.addClass('mark-completed');
    var id = $target.data('id');
    var text = $target.data('text');

    $.ajax({
      url: 'api/todo/' + id,
      method: 'PUT',
      data: {
        text: text,
        isComplete: true
      }
    });
  }

  function start() {

    $('#item-input').on('keyup', keyUpHappened);
    getInitialData();
    $('.list').on('click', '.delete-button', deleting);
    $('.list').on('click', 'li', markDone);
  }

  context.start = start;

})(window.ToDo);
