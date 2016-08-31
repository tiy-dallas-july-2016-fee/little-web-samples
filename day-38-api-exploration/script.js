'use strict';
if (this.Explore === undefined) this.Explore = {};

(function(context) {


  function planetApi() {
    $.ajax({
      url: 'http://swapi.co/api/planets/5/'
    })
    .done(function(data) {
      var string = JSON.stringify(data, null, '\t');
      $('#output').html(string);
      console.log('data', data);
    });
  }

  function listOfPlanetsApi() {
    $.ajax({
      url: 'http://swapi.co/api/planets/'
    })
    .done(function(data) {
      console.log('data', data);
      var string = JSON.stringify(data, null, '\t');
      $('#output').html(string);
    });
  }



  function start() {

    $('#planet-api').on('click', planetApi);
    $('#list-of-planets-api').on('click', listOfPlanetsApi);

  }

  context.start = start;

})(window.Explore);
