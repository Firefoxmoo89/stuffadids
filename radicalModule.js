var fs = require("fs");

exports.serveFile = (file,status,headers) => {
  fs.readFile("template/top.html",(errorTop,htmlTop) => {
    fs.readFile("template/bottom.html",(errorBottom,htmlBottom) => {
      fs.readFile(file,(error,data) => {
        response.writeHead(status,headers);         // (status 200 ok, response headers object)
        response.write(htmlTop+data+htmlBottom);    // html content
        response.end();
      });
    });
  });
};

// Use the exports keyword to make properties and methods available outside the module file.

