// Dado o usuário escreva uma função que produza o resultado no formato de frase exigido

function CriaFrase(usuarios){
    for(let usuario of usuarios){
        console.log('O '+ usuario.nome +' possui as habilidades ' + usuario.habilidades.join(', ') + '.');
    }
}


var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   console.log(CriaFrase(usuarios));