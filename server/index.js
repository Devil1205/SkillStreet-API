const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

//cors fix
app.use(cors());

//connecting to database
require("./db/db");

//json parsing
app.use(express.json());

//routes
app.use(require("./routes/noteRoutes"));

app.listen(port, ()=>{
    console.log("Listening on port "+port);
})