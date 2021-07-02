"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    // console.log(req)
    res.status(200).send('hellow home page ');
});
app.get('/about', function (req, res) {
    // console.log(req)
    res.status(200).send('hello about page <br/> <em>:><em/>');
});
app.all('*', function (req, res) {
    res.status(404).send('Page not found !!, <br/> SORRY BUDI');
});
// key words 
// app.get
// app.put
// app.delete       
// app.all        --method for all methods 
// app.post 
// app.use    --hence MedleWare--
// app.listen --listening to the port-- 
// app.listen
app.listen(5000, function () {
    console.log('listening to port 5000!!');
});
