var http = require('http');
var dt = require('./mymodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
    // console.log("starting node server \n output on port:8080");
}).listen(5000);