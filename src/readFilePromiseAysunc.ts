// approach 1 , 2
// import { readFile } from 'fs'
// const getText = (path: string)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// // approach one pure promise 

// getText('./src/container/readAnDwrite/first.txt').then(data=>console.log("data 1 promise:" ,data)).catch(err=>console.log(err))

// // second approach promise + async await 

// const start = async ()=>{
//     try{
//         const first = await getText('./src/container/readAnDwrite/first.txt');
//         console.log("data 2 promise + async:",first)
//     }catch (err){
//         console.log(err)
//     }
// }


// approach 3 utils.promisfy(module name)(arguments...) 

// import {promisify} from 'util';
// import { readFile } from 'fs';

// const start = async ()=>{
//     try{
//         const first = await promisify(readFile)('./src/container/readAnDwrite/first.txt', 'utf8');
//         const second = await promisify(readFile)('./src/container/readAnDwrite/second.txt','utf8');
//         console.log("data 3 promise + async:",first);
//         console.log("data 3 promise + async:",second);
//     }catch (err){
//         console.log(err)
//     }
// }

// approach 4 import readFile from fs/promise -(important you need to have above node -v 12)

import { readFile, writeFile } from 'fs/promises';

const start = async ()=>{
    try{
        const first = await readFile('./src/container/readAnDwrite/first.txt', 'utf8');
        const second = await readFile('./src/container/readAnDwrite/second.txt','utf8');
        writeFile('./src/container/readAnDwrite/IAMBOTHANDIAMAMAZING.txt',`AM BOTH of them: ${first}, ${second}`,{flag: 'a'})
        console.log("data 3 promise + async:",first);
        console.log("data 3 promise + async:",second);
    }catch (err){
        console.log(err)
    }
}

start();

