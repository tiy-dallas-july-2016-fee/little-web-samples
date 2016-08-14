'use strict';
if (this.whatever === undefined) this.whatever = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.whatever);
