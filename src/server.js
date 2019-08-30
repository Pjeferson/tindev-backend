const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const routes = require('./routes');

const server = express();

const DB_ADDR = process.env.MONGODB_URL;

mongoose.connect(DB_ADDR, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);