const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports={
    async index(req,res){//lista todos os produtos dentro da base de dados
        const {page=1}=req.query;
        const products = await Product.paginate({},{page, limit: 10});
        return res.json(products);

    },

    async show(req,res){ // mostra um unico produto
        const product= await Product.findById(req.params.id); //pega o id dos parametros da rota
        return res.json(product); 
    },
    
    
    async store(req,res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});//encontrar um produto pelo id que vem dos parametros e vou atualizar ele com o conteudo do req.body

        //new:true diz que eu quero que o mongoose retorne esse produto atualizado para a variavel product
        return res.json(product);
    },

    async destroy(req,res){
       await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
};