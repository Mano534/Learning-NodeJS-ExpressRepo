"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var path_1 = require("path");
console.log(path_1.join(__dirname, './public/html.html'));
// serving static files (htmls, css, imgs, and changing paths to direct to the puplic file...)
app.use(express_1.default.static('./public'));
// app.get('/',(req,res)=>{
//     res.sendFile(resolve(__dirname,'./../public/html.html'))
//     // res.send('hellow world')
// })
// dumping all in public folder -->be sure to name it index.html -very important- <--
// SSR (server side rendering)
app.all('*', function (req, res) { res.send("<h1>I AM SORRY !!!</h1>"); });
// listening 
app.listen(5002, function () {
    console.log('listening to port 5002');
});
