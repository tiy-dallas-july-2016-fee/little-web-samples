if (window.CounterApp === undefined) window.CounterApp = {};

(function(CounterApp) {

  function incrementClicked() {
    $.ajax({
      url: '/api/counter',
      method: 'POST'
    });
  }

  function showCount() {
    $.ajax({
      url: '/api/counter'
    })
    .done(function(data) {
      console.log('the data', data);
      //$('#counter-display').text(data.theCount);

      //get template html
      //create the template func
      //use that to generate output html
      //stick output html in page

      var templateHtml = $('#counter-template').html();
      var templateFunc = _.template(templateHtml);
      var outputHtml = templateFunc({
                                      count: data.theCount
                                    });
      $('#counter-display').html(outputHtml);
    });
  }

  function start() {

    var $incrementButton = $('#increment-counter');
    $incrementButton.on('click', incrementClicked);

    $('#show-count').on('click', showCount);

  }

  CounterApp.start = start;

})(this.CounterApp);
