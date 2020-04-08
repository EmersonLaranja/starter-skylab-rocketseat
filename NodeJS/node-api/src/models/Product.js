// falar o Schema do model, quais campos o produto pode ter e que tipos de valores vão salvar

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:String,
        required:true,
    },

    description:{
        type:String,
        required:true, 
    },

    url:{
        type:String,
        required:true,
    },

    createdAt:{ //guarda a data de criação de cada produto
        type:Date,
        default:Date.now,
    },
    
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product',ProductSchema); //registrando um model na aplicação (agora a aplicação sabe que existe uma coluna Product na nossa base de dados com todas essas informações)