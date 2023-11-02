require("dotenv").config();
const helmet = require("helmet");
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const port = process.env.SERVER_PORT || 3000;
const cors = require("cors");