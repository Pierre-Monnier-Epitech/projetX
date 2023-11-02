require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const port = process.env.SERVER_PORT || 3000;
const cors = require("cors");

app.use(express.json());

// permet de faire un console log de chaques requete qu'il y a sur le serveur
const logRequest = (req, res, next) => {
    console.log(
      `<---> ${new Date().toLocaleTimeString()} - ${req.method} - ${
        req.originalUrl
      } <--->`
    );
    next();
  };
app.use(logRequest);

connectDB();

// ##### ERROR FOR ALL UNKNOW ENDPOINT #####
app.use((req, res) => {
    res.status(404).json({ error: "Ressource introuvable" }).end();
});

app.listen(port);