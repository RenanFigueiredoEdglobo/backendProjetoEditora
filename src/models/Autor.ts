import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, require: true},
        idade: {type: String, require:true}
    }
);
const autores = mongoose.model("autores",autorSchema);
export default autores;