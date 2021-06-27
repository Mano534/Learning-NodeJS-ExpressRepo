import {readFile, writeFile} from "fs";

readFile('./src/container/readAnDwrite/first.txt','utf8',(err,data)=>{
    if (err) throw err;
    const first = data ; 
    readFile('./src/container/readAnDwrite/first.txt','utf8',(err,data2)=>{
        if (err) throw err;
        const second = data2 ; 
        writeFile('./src/container/readAnDwrite/third.txt',` ${first}, ${second}`,(err)=>{
            if(err) throw err
        }
    )
})
})