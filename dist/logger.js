"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger = function (req, res, next) {
    var url = req.url, method = req.method;
    var date = new Date().toISOString();
    console.log(method, url, date);
    next();
};
exports.logger = logger;
