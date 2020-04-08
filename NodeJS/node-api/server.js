const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json()); //permitindo envio de dados em JSON
app.use(cors());//permitindo o acesso de outros endereços 
//inciando o DB
mongoose.connect('mongodb+srv://emerson:laranja@starter-qbhbb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

requireDir('./src/models'); //registrando o model na aplicação


app.use('/api',require('./src/routes'));

app.listen(3001);

