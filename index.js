<<<<<<< HEAD
var http = require("http"),
url = require("url"),
path = require("path"),
fs = require("fs"),
port = process.argv[2] || 8888;

var startServer = function(){
	http.createServer(function(request, response) {
		
		var uri = url.parse(request.url).pathname
		, filename = path.join(process.cwd(), uri);
		
		fs.exists(filename, function(exists) {
			if(!exists) {
				response.writeHead(404, {"Content-Type": "text/plain"});
				response.write("404 Not Found\n");
				response.end();
				return;
			}
			
			if (fs.statSync(filename).isDirectory()) filename += '/index.html';
			
			fs.readFile(filename, "binary", function(err, file) {
				if(err) {
					response.writeHead(500, {"Content-Type": "text/plain"});
					response.write(err + "\n");
					response.end();
					return;
				}
				
				response.writeHead(200);
				response.write(file, "binary");
				response.end();
			});
		});
	}).listen(parseInt(port, 10));
	
	console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
	
}

exports.web =	startServer()

exports.printMsg = function() {
	console.log("This is a message from the demo package");
}
=======
var http = require('http'); // Fait appel à http.js
var url = require('url'); // Fait appel à url.js

exports.printMsg = function() {
	console.log("This is a message from the demo package");
}
>>>>>>> 4602cc541fbd552dccd66649f48a7d8e653431bd
