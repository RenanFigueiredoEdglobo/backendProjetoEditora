import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, require: true},
        idade: {type: Number, require:true}
    },
    {
        versionKey: false
    }
);
const autores = mongoose.model("autores",autorSchema);
export default autores;