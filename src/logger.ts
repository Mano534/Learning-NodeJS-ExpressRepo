import {Request, Response,NextFunction} from 'express';
export const logger = (req: Request,res:Response,next:NextFunction)=>{
    const { url , method } = req;
    const date = new Date().toISOString()
    console.log(method, url, date);
    next()
}