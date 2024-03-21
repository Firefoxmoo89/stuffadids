var http = require('http'); var url = require("url"); var fs = require("fs"); var rad = require("./radicalModule.js");
console.log("http://localhost:8080");

http.createServer(function (request, response) { 
  
  deets = url.parse(request.url, true); 

  if (deets.pathname == "/") {
    rad.servePage("index",200,{"Content-type":"text/html"},response);
  }
  else {
    rad.servePage("missing",404,{"Content-type":"text/html"},response);
  }

}).listen(80);