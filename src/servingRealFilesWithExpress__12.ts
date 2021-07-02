import express from 'express';
const app = express();
import {join , resolve} from 'path';
console.log(join(__dirname,'./public/html.html'))
// serving static files (htmls, css, imgs, and changing paths to direct to the puplic file...)

app.use(express.static('./public'));
// app.get('/',(req,res)=>{
//     res.sendFile(resolve(__dirname,'./../public/html.html'))
//     // res.send('hellow world')
// })

// dumping all in public folder -->be sure to name it index.html -very important- <--


// SSR (server side rendering)
app.all('*',(req,res)=>{res.send("<h1>I AM SORRY !!!</h1>")})





// listening 
app.listen(5002,()=>{
    console.log('listening to port 5002');
})