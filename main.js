var http = require('http'); var url = require("url"); var fs = require("fs"); var rad = require("./radicalModule.js");

http.createServer(function (request, response) { // request is object
  
  deets = url.parse(request.url, true); // deets.query for post ? information as object
  fs.readFile("templates/top.html",(error,data) => { htmlTop = data })
  fs.readFile("templates/bottom.html",(error,data) => {htmlBottom = data})
  
  function serveFile(file,status,headers) {
    fs.readFile(file,(error,data) => {
      response.writeHead(status,headers);         // (status 200 ok, response headers object)
      response.write(htmlTop+data+htmlBottom);    // html content
      response.end();
    });
  }

  if (deets.pathname == "/") {
    serveFile("templates/index.html",200,{"Content-type":"text/html"});
  }

  else {
    serveFile("templates/missing.html",404,{"Content-type":"text/html"});
  }
}).listen(8080);