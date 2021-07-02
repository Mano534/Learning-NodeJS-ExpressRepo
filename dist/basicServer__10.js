"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
var cssStyles = fs_1.readFileSync('./src/container/smallProject/css.css');
var htmlHtmles = fs_1.readFileSync('./src/container/smallProject/html.html');
console.log(cssStyles);
var server = http_1.createServer(function (req, res) {
    var url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(htmlHtmles);
        res.end();
    }
    else if (url === '/css.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(cssStyles);
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('Opps!! <br/>Page Not Found budy :)');
        res.end();
    }
});
server.listen(3000, function () {
    console.log('listining to port :3000');
});
