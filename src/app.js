import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"
import cors from 'cors';
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    app.use(cors())
    next()
})
db.on("error",console.log.bind(console,'erro de conexão'));
db.once("open",()=>{
    console.log("conexão com o banco bem sucedida")
});
app.use(express.json());
routes(app)
export default app;