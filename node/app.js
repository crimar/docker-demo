var http = require('http');

http.createServer(function (req, res) {
	setTimeout(function () {
		res.writeHead(200, { 'Content-Type' : 'text/plain' });
		res.end('Hello World!\n');
	}, 5000);
}).listen(80);

console.log('Server running');
