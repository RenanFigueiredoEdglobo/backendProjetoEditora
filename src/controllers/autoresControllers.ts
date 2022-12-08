import autores from "../models/Autor";
import { Request, Response } from 'express'
class AutorController{
    static listarAutores = (req:Request,res:Response)=>{
        autores.find((err, autores)=>{
            res.status(200).json(autores);
        });
    };
    static cadastrarAutores = (req: Request, res:Response) => {
        let autor = new autores(req.body);
        autor.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} -falha ao cadastrar a autor`})
            }else{
                res.status(200).send(autor.toJSON());
            }
        })
    }
    static atualizarAutores = (req: Request, res:Response)=>{
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err:Error)=>{
            if(!err){
                res.status(200).send({message: 'autor atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }
    static listarAutoresId = (req: Request, res:Response)=>{
        const id = req.params.id;

        autores.findById(id).exec((err, autore)=>{
            if(err){
                res.status(400).send({message: `${err.message} - id da autor não localizado`});
            }else{
                res.status(200).send(autore);
            }
        });
    }
    static excluirAutor = (req: Request, res:Response)=>{
        const id = req.params.id;
        autores.findByIdAndDelete(id).exec((err)=>{
            if(!err){
                res.status(200).send({message: 'autor deletada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

}
export default AutorController