import express from 'express';
const app = express();


app.get('/',(req,res)=>{
    // console.log(req)
    res.status(200).send('hellow home page ')
})

app.get('/about',(req,res)=>{
    // console.log(req)
    res.status(200).send('hello about page <br/> <em>:><em/>')
})

app.all('*',(req,res)=>{
    res.status(404).send('Page not found !!, <br/> SORRY BUDI')
})

// key words 
// app.get
// app.put
// app.delete       
// app.all        --method for all methods 
// app.post 
// app.use    --hence MedleWare--
// app.listen --listening to the port-- 








// app.listen
app.listen(5000,()=>{
    console.log('listening to port 5000!!')
})