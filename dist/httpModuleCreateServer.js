"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = http_1.createServer((req, res) => {
    if (req.url === "/") {
        res.write('welcome to the home page');
        res.end();
    }
    if (req.url === "/about") {
        res.end('welcome to the about page');
    }
    res.end('Opps!! <br/> 404 ERROR!! Page Not Found');
});
server.listen(5000);
//# sourceMappingURL=httpModuleCreateServer.js.map