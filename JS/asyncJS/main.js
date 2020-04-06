// AJAX é uma requisição assincrona à um backend, requisitar informações sem ter que recarregar a página
/*
var xhr = new XMLHttpRequest();// nos da acesso as funcionalidades do AJAX

xhr.open('GET','https://api.github.com/users/EmersonLaranja');
xhr.send(null);

xhr.onreadystatechange=function(){
    if(xhr.readyState==4){//a resposta voltou, me mostre
        console.log(JSON.parse(xhr.responseText));
    }
}*/




// -------------------------------------------------------------------------------------------------
// Promisses são funções que devolvem valor de sucesso ou não depois de um tempo, não influenciam no resto do código
/*
var myPromisse = function(){
    return new Promise(function(resolve,reject){//cada parâmetro é uma função
        var xhr = new XMLHttpRequest();// nos da acesso as funcionalidades do AJAX
        xhr.open('GET','https://api.github.com/users/EmersonLaranja');
        xhr.send(null);
        
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){//a resposta voltou, me mostre
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Request error');
                }
            }
        }
    });
}

var result=myPromisse()
.then(function(response){//executado quando chamar o resolve na promisse
    console.log(response);
}) 
.catch(function(error){
    console.warn(error);
});*/
// -------------------------------------------------------------------------------------------------


// Usaremos a biblioteca axios para fazermos requisições assincronas 
axios.get('https://api.github.com/users/EmersonLaranja')
.then(function(response){
    console.log(response);
}) 
.catch(function(error){
    console.warn(error);
});

//axios no fundo é uma requisição XMLHttpRequest, porém nos ajuda a retornar os valores facilmente