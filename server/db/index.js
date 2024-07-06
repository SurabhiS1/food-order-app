const e = require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://surabhisonam994:surabhi13@test.yszijtz.mongodb.net/food-order?retryWrites=true&w=majority&appName=test',
    {useNewURLParser: true})
.catch(e=>{
    console.error("error in making connection", e.message)
})

const db= mongoose.connection;

module.exports= db;