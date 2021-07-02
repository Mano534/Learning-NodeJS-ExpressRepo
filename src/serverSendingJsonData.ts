import express , {Application , Request, Response} from 'express';
const app :Application = express();
import {data, dataitemInterfaceForGeneralUse, dataitemInterface} from './data';
import { logger }  from './logger';
import { authorize } from './authorize';
import morgan from "morgan";
import routerPeople from './routs/routs';
import loginRouter from './routs/login';



// middle wares
app.use([morgan('tiny')])


// morgan 
// home routes
app.use("/login",loginRouter)
// console.log(router)
app.use('/api',routerPeople)










app.listen(5002,()=>console.log("listrening to port 5002"))