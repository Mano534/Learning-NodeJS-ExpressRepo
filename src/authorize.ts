import {Request, Response,NextFunction} from 'express';
export const authorize = (req: Request,res:Response,next:NextFunction)=>{
    const { name } = req.query
    if(name === "Mano"){
        console.log('your mano LOVE :O:')
        next();
    }
    else{
        res.status(401).send('UNOTHRIZED SORRY MA BOI :<')
    }
}