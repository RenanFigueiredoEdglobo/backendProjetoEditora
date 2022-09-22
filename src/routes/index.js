import express from "express";
import noticias from "./noticiasRoutes.js"
import autores from "./autorRoutes.js"
const routes = (app) => {
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