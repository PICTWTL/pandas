const mongoose = require("mongoose")
require('dotenv').config()
const mongoURI = process.env.mongoURI;
const connect_to_mongo = async ()=>{
    mongoose.connect(mongoURI, ()=>{console.log("Connected to mongo Succesfully")})
}

module.exports = connect_to_mongo;
