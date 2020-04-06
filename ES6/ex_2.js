const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idades=usuarios.map(function(item){
    return item.idade;
});


/*Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]*/

const maiores=usuarios.filter(function(item){
    return item.idade>18;
});

/*Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
*/

const googleWorker=usuarios.find(function(item){
    return item.empresa==="Google";
});

/*Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:*/

const operacao=usuarios
.map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))

.filter((item)=>item.idade<=50);

console.log(operacao);