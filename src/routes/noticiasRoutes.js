import express from "express";
import NoticiaController from "../controllers/noticiasController.js";

const router = express.Router();

router
    .get("/noticias", NoticiaController.listarNoticias)
    .post("/noticias", NoticiaController.cadastrarNoticia)
    .put("/noticias/:id",NoticiaController.atualizarNoticia)
export default router;