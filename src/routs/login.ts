import express , {Request,Response} from 'express';
const router =  express.Router();
import {authorize} from './../authorize';

router.post('/',authorize,(req : Request,res : Response)=>{
    res.send('ur authorized');
})

export default router
