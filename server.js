const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./connection.js");
const routes = require('./routes/routes.js');

app = express();

app.use(bodyParser.json());
app.use(cors({origin:"http://localhost:4200"}));

app.listen(9000, function(){
    console.log("Server Started at port 9000..."); 
});

app.use('/students', routes);