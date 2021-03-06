var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var data = [];

app.get('/api/guestbookentry', function(req, res) {
  console.log('GET');
  res.send(data);
});

app.post('/api/guestbookentry', function(req, res) {
  console.log('POST', req.body);

  //this is for illustrative porpoises
  var id = Math.ceil(Math.random() * 1000000);

  data.push({
    id: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    hasGivenGift: req.body.hasGivenGift
  });

  res.send({ guestId: id });
});

app.delete('/api/guestbookentry/:id', function(req, res) {
  console.log('DELETE', req.params.id);

  var index = data.findIndex(x => x.id == req.params.id);

  if (index > -1) {
    console.log('deleting item with id', req.params.id, '"' + data[index].firstName + '"');
    data.splice(index, 1);
  }

  res.sendStatus(204);
});

app.put('/api/guestbookentry/:id', function(req, res) {
  console.log('PUT id', req.params.id);

  var index = data.findIndex(x => x.id == req.params.id);

  if (index > -1) {
    if (data[index].hasGivenGift === 'true') {
      data[index].hasGivenGift = 'false';
    }
    else {
      data[index].hasGivenGift = 'true';
    }
  }

  res.sendStatus(204);
});




app.listen(5002, function() {
  console.log('Guestbook app listening on port 5002');
});
