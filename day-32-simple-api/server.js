var express = require('express');
var app = express();

//Sets up static file handling for this folder.
// So, a request to http://localhost:5001/file.js will return a static file call "file.js" if it exits.
// If a request to http://localhost:5001/index.html comes it, it will return that file.
// If a request is made to http://localhost:5001, it assumes you mean "index.html" and returns that file if it exists
app.use(express.static('public'));


var count = 0;

//to test this, you can use curl
//curl http://localhost:5001/api/counter
app.get('/api/counter', function(req, res) {
  res.send({ theCount: count });
});

//to test this, you can use CURL
//curl -X POST http://localhost:5001/api/counter
app.post('/api/counter', function(req, res) {
  count += 1;
  res.sendStatus(204); //I'm not sending back any content
});



app.listen(5001, function() {
  console.log('listening on port 5001!');
});
