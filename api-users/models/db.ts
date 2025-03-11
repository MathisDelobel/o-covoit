// On importe mongoose
import mongoose from "mongoose";

// On utilise Mongoose pour se connecter à la base de domaine
export default mongoose.createConnection(process.env.MONGO_URL_USERS as string);
