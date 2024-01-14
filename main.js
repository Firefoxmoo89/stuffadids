var http = require('http'); var url = require("url"); var fs = require("fs"); var rad = require("../radicalModule.js");

http.createServer(function (request, response) { // request is object
  deets = url.parse(request.url, true); // deets.query for post ? information as object

  
  if (deet.pathname == "/") {
    fs.readFile("templates/index.html", (error, data) {
      response.writeHead(200, {           // (status 200 ok, response headers object)
        "Content-Type": "texthtml"
      });
      response.write(data);                   // html content
      response.end();
    });
  }

  response.writeHead(200, {'Content-Type': 'text/html'}); 
  response.write(request.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year+" "+q.month;
  response.end(txt);
}).listen(8080);