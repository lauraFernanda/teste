const express = require("express");

const mongoose = require('mongoose');

const cors = require ("cors");

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/ProjetoCestaBasica",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);
const routes = require("./Routes");

server.use(routes);
server.listen(3333);