var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
// fs.readFile('demo.html', function(err, data) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write(data);
//     return res.end();
// });

fs.appendFile('mytxt.txt', 'hello From Text File!!!', function (err) {
    if(err) throw err;
    console.log('saved');
})
}).listen(8080);