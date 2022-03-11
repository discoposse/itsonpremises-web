var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<p align=center><h1>Did you say on-premise?</h1></p>');
    response.write('<img src=itspremises.jpg />');
    response.end();
}).listen(8080);

console.log('Server started');
