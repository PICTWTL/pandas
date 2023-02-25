const connect_to_mongo = require('./db')
connect_to_mongo();
const express = require('express');
require('dotenv').config()
const port = process.env.PORT;
const app = express();

//MIDDLEWARES
app.use(express.json());


//ROUTES
app.use("/api/auth", require('./routes/auth'))

//LISTEN
app.listen(port, ()=>{
    console.log(`App is Listening on port ${port} `);
    // console.log(process.env.PORT)

})