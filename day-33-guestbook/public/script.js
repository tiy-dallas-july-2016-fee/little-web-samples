if (window.GuestBook === undefined) window.GuestBook = {};

(function(GB) {

  function templateEntry(firstName, lastName, id) {
    var templateHtml = $('#guest-list-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc({
      id: id,
      firstName: firstName,
      lastName: lastName
    });
    $('#list').append(html);
  }

  function signInButtonClicked() {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();


    $.ajax({
      url: '/api/guestbookentry',
      method: 'POST',
      data: {
        firstName: firstName,
        lastName: lastName
      }
    })
    .done(function(data) {
      templateEntry(firstName, lastName, data.guestId);
    });

  }

  function loadExistingData() {
    $.ajax({
      url: '/api/guestbookentry'
    })
    .done(function(data) {

      data.forEach(function(entry) {
        console.log('entry', entry);
        templateEntry(entry.firstName, entry.lastName, entry.id)
      });

    });
  }

  function deleteClicked(evt) {
    var $target = $(evt.target);
    var id = $target.data('id');
    console.log('id', id);

    $.ajax({
      url: '/api/guestbookentry/' + id,
      method: 'DELETE'
    });
  }

  function start() {
    loadExistingData();

    $('#sign-in-button').on('click', signInButtonClicked);

    $('#list').on('click', deleteClicked);
  }

  GB.startItYo = start;

})(window.GuestBook);
