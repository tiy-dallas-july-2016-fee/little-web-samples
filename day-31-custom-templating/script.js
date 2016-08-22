'use strict';
if (this.Templating === undefined) this.Templating = {};

(function(context) {

  function start() {

    var people = [
      {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 40,
        gender: 'M',
        hasSuperpowers: false
      },
      {
        firstName: 'Sue',
        lastName: 'Storm',
        age: 32,
        gender: 'F',
        hasSuperpowers: true
      }
    ];


    people.forEach(function(person) {

      var html = $('#awesome-template').html();
      var templateFunc = _.template(templateHtml);
      var html = templateFunc(person);

      //This is the worst thing you could do in life
      // for (var key in person) {
      //   console.log('key', key);
      //   html = html.replace('<%= ' + key + ' %>', person[key]);
      // }

      //Better, use regex to find all matching aligator tags

      //Better better, use undercore and don't do this

      $('#people-list').append(html);

    });












  }

  context.start = start;

})(window.Templating);
