var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync('./index.html','utf8');
  respond.send(buf.toString('utf8',0,buf.length));
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
