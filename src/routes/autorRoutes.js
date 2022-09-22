import express from "express";
import AutorController from "../controllers/autoresControllers.js";

const router = express.Router();

router
    .get("/Autores", AutorController.listarAutores)
    .get("/Autores/:id", AutorController.listarAutoresId)
    .post("/Autores", AutorController.cadastrarAutores)
    .put("/Autores/:id",AutorController.atualizarAutores)
    .delete("/Autores/:id",AutorController.excluirAutor)

export default router;