import express from "express";
import NoticiaController from "../controllers/noticiasController.js";

const router = express.Router();

router
    .get("/noticias", NoticiaController.listarNoticias)
    .get("/noticia/:id", NoticiaController.listarNoticiasId)
    .post("/cadastrar-noticia", NoticiaController.cadastrarNoticias)
    .put("/atualizar-noticia/:id",NoticiaController.atualizarNoticias)
    .delete("/deletar-noticia/:id",NoticiaController.excluirNoticia)

export default router;