import mongoose from "mongoose";

mongoose.connect("mongodb+srv://noticiasDB:123@noticiasdb.gqnu3pk.mongodb.net/projeto-crud-noticias");

let db = mongoose.connection
export default db;