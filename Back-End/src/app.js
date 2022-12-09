const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const suppliers = require("./routes/suppliers")
const services = require("./routes/services")
const review = require("./routes/review")
const service = require('./routes/service')
const category = require('./routes/category')
const location = require('./routes/location.js');
const login = require("./routes/login")
const userHandler = require("./routes/userHandler")
require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use("/suppliers", suppliers)
server.use("/services", services)
server.use("/review", review)
server.use('/service', service)
server.use('/category', category)
server.use('/location', location)
server.use("/login", login)
server.use("/userHandler", userHandler)

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
})

module.exports = server;