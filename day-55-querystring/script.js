'use strict';
if (this.QS === undefined) this.QS = {};

(function(context) {

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function start() {

    $('button').on('click', function() {

      console.log(window.location);
      //window.location = 'http://google.com';

    });




    var s = getParameterByName('s');
    console.log('I searched for: ', s);

    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + s + '&page=1'
    })
    .done(function(data) {
      console.log('the data returned', data);
    });

  }

  context.start = start;

})(window.QS);
