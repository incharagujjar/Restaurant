const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phonenumber : {
        type: String,
        required: true,
        unique: true
    },
    numberofpeople : {
        type: String,
        required: true,
    },
    time : {
        type: String,
        required: true,
    },
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;