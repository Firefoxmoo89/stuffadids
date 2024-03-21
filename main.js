var http = require('http'); var url = require("url"); var fs = require("fs"); var rad = require("./radicalModule.js");

http.createServer(function (request, response) { 
  
  deets = url.parse(request.url, true); 

  if (deets.pathname == "/") {
    rad.servePage("templates/index.html",200,{"Content-type":"text/html"},response);
  }
  else {
    rad.servePage("templates/missing.html",404,{"Content-type":"text/html"},response);
  }

}).listen(80);