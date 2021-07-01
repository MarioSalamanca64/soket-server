//creasion de nuestras api rest full

import { Router,Request,Response} from 'express';


const router = Router();
//metodo get 
router.get('/mensajes', (req: Request, res:Response) => {

    res.json({
        ok:true,
        mensaje: 'Todo esta bien'
    })

});
//post resivo los elementos
router.post('/mensajes', (req: Request, res:Response) => {
    //esto son los elentos que creamos ramdon en porman el cuerpo,de
    const cuerpo = req.body.cuerpo;
    const de     =  req.body.de;

    res.json({
        ok:true,
        cuerpo,
        de
    })

});

//:id es lo que pongamos en la url abc 123 lo que sea 
//mensajes privados
router.post('/mensajes/:id', (req: Request, res:Response) => {
    //esto son los elentos que creamos ramdon en porman el cuerpo,de
    const cuerpo = req.body.cuerpo;
    const de     =  req.body.de;
    //parmas son los datos de la url
    const id     = req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id
    })

});

export default router;