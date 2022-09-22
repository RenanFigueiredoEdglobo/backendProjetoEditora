import mongoose from "mongoose";

const noticiaSchema = new mongoose.Schema(
   {
    id: {type: String},
    titulo: {type: String,required: true},
    conteudo: {type: String,required: true},
    data_publicacao: {type: Date}
   }
);
const noticias= mongoose.model('noticias',noticiaSchema);

export default noticias;