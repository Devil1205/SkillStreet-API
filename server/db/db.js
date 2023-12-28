const mongoose = require('mongoose');
const URI = process.env.URI || "mongodb://localhost:27017/PSMS";

mongoose.connect(URI)
.then(()=>{console.log("connect to mongodb")})
.catch((e)=>{console.log(e)});