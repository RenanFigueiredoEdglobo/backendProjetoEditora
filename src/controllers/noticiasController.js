import noticias from "../models/Noticia.js";

class NoticiaController{
    static listarNoticias = (req,res)=>{
        noticias.find((err, noticias)=>{
            res.status(200).json(noticias);
        });
    };
    static cadastrarNoticia = (req, res) => {
        let noticia = new noticias(req.body);
        noticia.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} -falha ao cadastrar a noticia`})
            }else{
                res.status(201).send(noticia.toJSON());
            }
        })
    }
    static atualizarNoticia = (req, res)=>{
        const id = req.params.id;

        noticias.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Noticia atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }
    static listarNoticiasId = (req, res)=>{
        const id = req.params.id;

        noticias.findById(id, (err, noticias)=>{
            if(err){
                res.status(400).send({message: `${err.message} - id da noticia não localizado`});
            }else{
                res.status(200).send(noticias);
            }
        });
    }
    static excluirNoticia = (req, res)=>{
        const id = req.params.id;
        noticias.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'noticia deletada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        });
    }

}
export default NoticiaController