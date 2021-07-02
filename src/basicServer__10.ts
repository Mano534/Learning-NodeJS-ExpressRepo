import {createServer} from 'http';
import { readFileSync } from 'fs';


let cssStyles = readFileSync('./src/container/smallProject/css.css');
let htmlHtmles = readFileSync('./src/container/smallProject/html.html');
console.log(cssStyles)

let server = createServer((req,res)=>{
    let {url} = req;

     if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(htmlHtmles);
        res.end();
    }else
    if(url==='/css.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(cssStyles);
        res.end();
    }
    else{

        res.writeHead(404,{'content-type':'text/html'});
        res.write('Opps!! <br/>Page Not Found budy :)');
        res.end();
    }
})
server.listen(3000, ()=>{
    console.log('listining to port :3000')
})