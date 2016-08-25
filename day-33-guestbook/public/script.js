if (window.GuestBook === undefined) window.GuestBook = {};

(function(GB) {

  function templateEntry(firstName, lastName, id, hasGivenGift) {
    console.log('has given gift', hasGivenGift);

    var className = '';
    if (hasGivenGift == 'true') {
      className = 'has-given-gift';
    }

    var templateHtml = $('#guest-list-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc({
      id: id,
      firstName: firstName,
      lastName: lastName,
      className: className
    });
    $('#list').append(html);
  }

  //has-given-gift

  function signInButtonClicked() {
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();


    $.ajax({
      url: '/api/guestbookentry',
      method: 'POST',
      data: {
        firstName: firstName,
        lastName: lastName,
        hasGivenGift: false
      }
    })
    .done(function(data) {
      templateEntry(firstName, lastName, data.guestId, false);
    });

  }

  function loadExistingData() {
    $.ajax({
      url: '/api/guestbookentry'
    })
    .done(function(data) {

      data.forEach(function(entry) {
        console.log('entry', entry);
        templateEntry(entry.firstName,
          entry.lastName,
          entry.id,
          entry.hasGivenGift);
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

    //get the parent (the li) of the delete button and remove it.
    $target.parent().remove();
  }

  function gaveGiftButtonClicked(evt) {
    var $target = $(evt.target);
    var id = $target.data('id');

    $.ajax({
      url: '/api/guestbookentry/' + id,
      method: 'PUT'
    });

    $target.parent().toggleClass('has-given-gift');
  }

  function start() {
    loadExistingData();

    $('#sign-in-button').on('click', signInButtonClicked);

    $('#list').on('click', '.delete-button', deleteClicked);
    $('#list').on('click', '.gave-gift-button', gaveGiftButtonClicked);
  }

  GB.startItYo = start;

})(window.GuestBook);
