const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// ALL ROUTING IS DONE HERE
const routes = require("./routes/index.js");

// EXPRESS APP CONFIGURATION
const server = express();
server.name = "MARKETPLACE_API";

// HTTP REQUEST LOGGER
server.use(morgan("dev"));

// ACCEPTS URL-ENCODED AND JSON DATA
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// CONFIGURES CORS
server.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://changapp.up.railway.app",
      "http://changapp.up.railway.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// PROCESS ROUTES ELSEWHERE
server.use("/", routes);

// ERROR-CATCHING ENDWARE
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;

  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
