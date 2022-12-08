import express from "express";
import noticias from "./noticiasRoutes";
import autores from "./autorRoutes";
import db from "../config/dbConnect";
const routes = (app = express()) => {
    db.on("error", console.log.bind(console, 'erro de conexão'));
    db.once("open", () => {
        console.log("conexão com o banco bem sucedida")
    });
    app.route('/').get((req, res) => {
        res.status(200).json({ "status": "OK" })
    });
    app.use(
        express.json(),
        noticias,
        autores
    )
};
export default routes;