import { Router ,Response,Request,NextFunction} from 'express'
let router = Router();
import {data, dataitemInterfaceForGeneralUse} from './../data';


router.get('/',(req,res)=>{
    res.send('its me again');
})


router.get('/products/:productName',(req,res)=>{

    const {productName} = req.params

    const specifiedPrduct = data.find(product=>product.name === productName)
    if(!specifiedPrduct){
        return res.send('product Not Found ')
    }
   return  res.json(specifiedPrduct)
})
    interface Queries {
        search?: string;
        limit?: string;
    }
router.get('/v2/products/query',(req : Request<{},{},{},Queries> ,res: Response)=>{

    const { limit,search  }  = req.query;
    let data2 = data.map((item, index)=>{
        item.name = item.name.toLocaleLowerCase();
        return item
    })  ;
    
    let specifiedPrduct2: dataitemInterfaceForGeneralUse[] = data2 ;
    if(search){
         specifiedPrduct2 = specifiedPrduct2.filter(ele=>{return ele.name!.includes(search)})
    }
    if(limit){
        if(typeof Number(limit)=== 'number'){
            specifiedPrduct2 = specifiedPrduct2.slice(0,Number(limit))
        }
   }
   if(specifiedPrduct2.length < 1){
       return res.status(200).json({sucess: true, data:[]})
   }
   return res.status(200).json({sucess: true , data: specifiedPrduct2})

//    return  res.json(specifiedPrduct)
})

export default router ; 