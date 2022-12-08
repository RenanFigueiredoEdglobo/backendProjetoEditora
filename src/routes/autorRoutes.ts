import express from "express";
import AutorController from "../controllers/autoresControllers";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autor/:id", AutorController.listarAutoresId)
    .post("/cadastrar-autor", AutorController.cadastrarAutores)
    .put("/atualizar-autor/:id",AutorController.atualizarAutores)
    .delete("/excluir-autor/:id",AutorController.excluirAutor)

export default router;