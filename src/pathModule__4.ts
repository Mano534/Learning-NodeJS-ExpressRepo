const path = require('path');


//path sep 
console.log(path.sep);

//path join (normalized path)
console.log(path.join('/container','subfolder', "file.txt"));

//path basename(normalized path) and gives the file name in the last 
console.log(path.basename('/container/subfolder/file.txt'));

//path resolve takes dirname + normalized path   -- gives you the absoulte path 
console.log(path.resolve(__dirname,'/container','subfolder', "file.txt"))