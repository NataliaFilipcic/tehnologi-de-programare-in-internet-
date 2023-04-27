const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>Hello from my web server</h1></body></html>');
    res.end();
  } else if (req.url === '/vara.html') {
    fs.readFile('vara.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/iarna.html') {
    fs.readFile('iarna.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>404 Not Found</h1></body></html>');
    res.end();
  }
});

server.listen(8080);
