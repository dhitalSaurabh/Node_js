// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     //  res.end('Hello World!');
//     res.end('Using Node Server For The First Time!');
//     console.log("starting node server \n output on port:8080");
// }).listen(8080);

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
    console.log("starting node server \n output on port:8080");

}).listen(8080);