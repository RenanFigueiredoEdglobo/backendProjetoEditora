import express from "express";
import noticias from "./noticiasRoutes"
import autores from "./autorRoutes"
const routes = (app = express()) => {
    app.route('/').get((req, res)=>{
        res.status(200).json({"status":"OK"})
    });
    app.use(
        express.json(),
        noticias,
        autores
    )
};
export default routes;