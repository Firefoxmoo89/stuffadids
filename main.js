require("./instrument.js");
var http = require('http'); var url = require("url"); var fs = require("fs"); 
var rad = require("./radicalModule.js"); var mail = require("./mail.js");

datetime = new Date(); datetime = "D"+datetime.toISOString().slice(0,19).replaceAll(":","").replaceAll("-","");
for (html of ["top.html","bottom.html"]) {
  content = fs.readFileSync("html/"+html,"utf8");
  content = content.replace(/\?v=.*\"/g,"?v="+datetime+"\"");
  fs.writeFileSync("html/"+html,content);
}

http.createServer(function (request, response) { 
  deets = url.parse(request.url, true); 

  if (deets.pathname == "/") {
    rad.servePage("index",200,{"Content-type":"text/html"},response);
  }
  else if (deets.pathname.includes("/style")) { rad.serveFile(deets.pathname.slice(1),200,{"Content-type":"text/css"},response) }
  else if (deets.pathname.includes("/script")) { rad.serveFile(deets.pathname.slice(1),200,{"Content-type":"text/javascript"},response) }
  else if (deets.pathname.includes("/image")) { 
    extension = deets.pathname.slice(deets.pathname.indexOf(".")+1);
    if (extension == "svg") { extension = "svg+xml" }
    rad.serveFile(deets.pathname.slice(1),200,{"Content-type":"image/"+extension},response) 
  }
  else if (deets.pathname == "/sitemap.xml") { rad.serveFile("sitemap.xml",200,{},response) }
  else { rad.servePage("missing",404,{"Content-type":"text/html"},response) }

}).listen(8000);