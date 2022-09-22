import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://noticiasDB:123@noticiasdb.gqnu3pk.mongodb.net/projeto-crud-noticias"
mongoose.connect(MONGODB_URL);

let db = mongoose.connection
export default db;