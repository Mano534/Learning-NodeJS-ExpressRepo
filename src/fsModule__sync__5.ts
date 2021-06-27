// const fs = require('fs');
import { readFileSync, writeFileSync } from 'fs';

// fs.readFileSync fopr reading files 

// read the first file 
const f1 = readFileSync('./src/container/readAnDwrite/first.txt', 'utf8');
const f2 = readFileSync('./src/container/readAnDwrite/second.txt', 'utf8');

// fs.write
writeFileSync('./src/container/readAnDwrite/IAMBOTH.txt',
    ` ${f1}, ${f2}`,
    {flag: "a"}
);



