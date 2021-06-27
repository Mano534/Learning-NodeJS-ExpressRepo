"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.readFile('./src/container/readAnDwrite/first.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    const first = data;
    fs_1.readFile('./src/container/readAnDwrite/first.txt', 'utf8', (err, data2) => {
        if (err)
            throw err;
        const second = data2;
        fs_1.writeFile('./src/container/readAnDwrite/third.txt', ` ${first}, ${second}`, (err) => {
            if (err)
                throw err;
        });
    });
});
//# sourceMappingURL=fsModuleAysunc__6.js.map