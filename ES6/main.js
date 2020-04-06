/*class List{
    constructor(){//metodo que vai ser o primeiro metodo executado quando instanciarmos uma nova classe
        this.data=[];

        add(data){
            this.data.push(data);
        }
    }
}

class TodoList extends List{//herdando propriedades de List
    constructor(){
        super(); //chamando o constructor da classe pai

    }
    
}

const MinhaLista = new TodoList();//instanciando a classe

document.getElementById('novotodo');onclick=function(){
    MinhaLista.add('Novo todo');
}*/
// --------------------------------------------------------------------------------

// const não pode ter seu valor reatribuido, mas ela é mutável
// --------------------------------------------------------------------------------

/*const arr = [1,3,4,5,8,9];

const newArr=arr.map(function(item,index){//map percorre o vetor e retornar uma nova informação
    return item+index;
});

// console.log(newArr);


const sum=arr.reduce(function(total,next){ //consumir todo vetor e transformar numa unica informação
    return total+=next;
}); 
// console.log(sum);

const filter = arr.filter(function(item){//true to keep the value in or false to delete the value
    return item%2===0;
});

// console.log(filter);

const find = arr.find(function(item){//verificar se existe uma info no array ou se conseguimos encontra-la
    return item===42;//retorna undefined pois não encontrou
});

console.log(find);*/
// --------------------------------------------------------------------------------
/*
const arr= [1,3,4,5,6];

const newArr=arr.map(function(item){
    return item*2;
});

// com arrowfunctions podemos reescrever assim:
const newArr=arr.map(item=>item*2);
*/
// --------------------------------------------------------------------------------
/*
const usuario={
    nome:'Emerson',
    idade:21,
    endereco:{
        cidade:'Vila Velha',
        estado: 'ES',
    },
};

const {nome,idade,endereco:{cidade}}=usuario;

console.log(nome);
console.log(idade);
console.log(cidade);*/
// --------------------------------------------------------------------------------
//REST serve para pergarmos o resto das propriedades

/*const usuario={
    nome:'Emerson',
    idade:21,
    empresa:'none'
};

const {nome,...resto}=usuario; //armazenando o nome em "nome" e as outras informações em "resto"

console.log(nome);
console.log(resto);*/
// --------------------------------------------------------------------------------

//SPREAD repassa as info de um obj ou array para outra ed   
/*const arr1=[1,2,3];
const arr2=[4,5,6];

const arr3=[...arr1,...arr2];
console.log(arr3);*/
// --------------------------------------------------------------------------------

//OBJECT SHORT SYNTAX é quando a propriedade tem o mesmo no que da variável, então posso colocar apenas uma vez

/*const nome='Emerson';
const cidade='VV';

const usuario={
    nome,
    cidade,
};

console.log(usuario);*/
// --------------------------------------------------------------------------------




import {sum} from './functions';

console.log(sum(1,2));