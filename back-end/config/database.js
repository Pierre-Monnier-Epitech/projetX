const dotenv = require("dotenv");
dotenv.config({path:'../.env'});
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "==================================== \n Connexion à la base de données réussie ✅\n===================================="
    );
  } catch (error) {
    console.log("====================================");
    console.error("Erreur de connexion à la base de données", error);
    process.exit(1);
  }
};

module.exports = connectDB;