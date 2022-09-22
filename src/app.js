import express from "express";
import db from "./config/dbConnect.js";
import noticias from "./models/Noticia.js"
import routes from "./routes/index.js"
db.on("error",console.log.bind(console,'erro de conexão'));
db.once("open",()=>{
    console.log("conexão com o banco bem sucedida")
});

const app = express();
app.use(express.json());

routes(app);



export default app;