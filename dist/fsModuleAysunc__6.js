"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
fs_1.readFile('./src/container/readAnDwrite/first.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    var first = data;
    fs_1.readFile('./src/container/readAnDwrite/first.txt', 'utf8', function (err, data2) {
        if (err)
            throw err;
        var second = data2;
        fs_1.writeFile('./src/container/readAnDwrite/third.txt', " " + first + ", " + second, function (err) {
            if (err)
                throw err;
        });
    });
});
