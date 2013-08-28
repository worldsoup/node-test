var http = require('http');
console.log('Server starting');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(80);
console.log('Server running at http://172.31.18.76:80/');