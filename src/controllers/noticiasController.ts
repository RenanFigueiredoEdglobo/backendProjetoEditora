import noticias from "../models/Noticia";
import { Request, Response } from 'express'
class NoticiaController{
    static listarNoticias = (req: Request,res: Response)=>{
        noticias.find()
        .populate('autor')
        .exec((err, noticias)=>{
            res.status(200).json(noticias);
        });
    };
    static cadastrarNoticias = (req:Request, res: Response) => {
        let noticia = new noticias(req.body);
        noticia.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} -falha ao cadastrar a noticia`})
            }else{
                res.status(200).send(noticia.toJSON());
            }
        })
    }
    static atualizarNoticias = (req:Request, res: Response)=>{
        const id = req.params.id;

        noticias.findByIdAndUpdate(id, {$set: req.body}, (err:Error)=>{
            if(!err){
                res.status(200).send({message: 'Noticia atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }
    static listarNoticiasId = (req:Request, res: Response)=>{
        const id = req.params.id;

        noticias.findById(id)
        .populate('autor')
        .exec((err, noticias)=>{
            if(err){
                res.status(400).send({message: `${err.message} - id da noticia não localizado`});
            }else{
                res.status(200).send(noticias);
            }
        });
    }
    static excluirNoticia = (req:Request, res: Response)=>{
        const id = req.params.id;
        noticias.findByIdAndDelete(id, (err:Error)=>{
            if(!err){
                res.status(200).send({message: 'noticia deletada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

}
export default NoticiaController