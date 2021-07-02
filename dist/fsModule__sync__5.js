"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const fs = require('fs');
var fs_1 = require("fs");
// fs.readFileSync fopr reading files 
// read the first file 
var f1 = fs_1.readFileSync('./src/container/readAnDwrite/first.txt', 'utf8');
var f2 = fs_1.readFileSync('./src/container/readAnDwrite/second.txt', 'utf8');
// fs.write
fs_1.writeFileSync('./src/container/readAnDwrite/IAMBOTH.txt', " " + f1 + ", " + f2, { flag: "a" });
