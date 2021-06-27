"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const f1 = fs_1.readFileSync('./src/container/readAnDwrite/first.txt', 'utf8');
const f2 = fs_1.readFileSync('./src/container/readAnDwrite/second.txt', 'utf8');
fs_1.writeFileSync('./src/container/readAnDwrite/IAMBOTH.txt', ` ${f1}, ${f2}`, { flag: "a" });
//# sourceMappingURL=fsModule__sync__5.js.map