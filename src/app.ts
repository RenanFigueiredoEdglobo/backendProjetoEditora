import express from "express";
import db from "./config/dbConnect";
import routes from "./routes/index"
import cors from 'cors';
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
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