"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var morgan_1 = __importDefault(require("morgan"));
var routs_1 = __importDefault(require("./routs/routs"));
var login_1 = __importDefault(require("./routs/login"));
// middle wares
app.use([morgan_1.default('tiny')]);
// morgan 
// home routes
app.use("/login", login_1.default);
// console.log(router)
app.use('/api', routs_1.default);
app.listen(5002, function () { return console.log("listrening to port 5002"); });
