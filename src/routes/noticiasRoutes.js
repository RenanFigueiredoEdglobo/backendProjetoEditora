import express from "express";
import NoticiaController from "../controllers/noticiasController.js";

const router = express.Router();

router
    .get("/noticias", NoticiaController.listarNoticias)
    .get("/noticias/:id", NoticiaController.listarNoticiasId)
    .post("/noticias", NoticiaController.cadastrarNoticias)
    .put("/noticias/:id",NoticiaController.atualizarNoticias)
    .delete("/noticias/:id",NoticiaController.excluirNoticia)

export default router;