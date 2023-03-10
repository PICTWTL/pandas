const mongoose = require('mongoose')
const {Schema} = mongoose;
//user model schema

const userSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    email:{
        type : String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
  });
const User = mongoose.model('user', userSchema);
User.createIndexes();
module.exports = User;