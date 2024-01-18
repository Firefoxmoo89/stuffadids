var http = require('http'); var url = require("url"); var fs = require("fs"); var rad = require("./radicalModule.js");


http.createServer(function (request, response) { // request is object
  
  deets = url.parse(request.url, true); // deets.query for post ? information as object

  if (deets.pathname == "/") {
    rad.serveFile("templates/index.html",200,{"Content-type":"text/html"});
  }

  else {
    rad.serveFile("templates/missing.html",404,{"Content-type":"text/html"});
  }
}).listen(8080);