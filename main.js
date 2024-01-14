var http = require('http');
var url = require("url");
var fs = require("fs");

http.createServer(function (request, response) { // request is object
  response.writeHead(200, {'Content-Type': 'text/html'}); // (status 200 ok, response headers object)
  response.write(request.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year+" "+q.month;
  response.end(txt);
}).listen(8080);