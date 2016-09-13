'use strict';
if (this.LocalStorageFun === undefined) this.LocalStorageFun = {};

(function(context) {


  function counter() {

    var count = Number(localStorage.getItem('count'));
    console.log('count', count);

    if (!count) {
      count = 0;
      localStorage.setItem('count', count);
    }

    $('#up').on('click', function() {
      count += 1;
      localStorage.setItem('count', count);
      $('.display').text(count);
    });

    $('#down').on('click', function() {
      count -= 1;
      localStorage.setItem('count', count);
      $('.display').text(count);
    })

    $('#clear').on('click', function() {
      localStorage.removeItem('count');
      $('.display').text('0');
    });

    $('.display').text(count);

  }

  function list() {

    var houses = [
      {
        address: '123 Sunset Blvd',
        city: 'Carrolton'
      },
      {
        address: '987 Other Street',
        city: 'McKinney'
      }
    ];

    var housesAsString = JSON.stringify(houses);
    console.log('housesAsString', housesAsString);

    localStorage.setItem('houses', housesAsString);



    console.log(localStorage.getItem('houses'));
    var retrievedHouses = JSON.parse(localStorage.getItem('houses'));
    console.log(retrievedHouses);

  }






  function start() {
    counter();

    list();
  }

  context.start = start;

})(window.LocalStorageFun);
