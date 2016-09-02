var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// 
require('./api.js')(app);

var port = 3763;

app.listen(port, function() {
  console.log('listening on port ', port);
});
