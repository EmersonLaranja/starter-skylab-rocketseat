var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function CreateAdress() {
    return ('O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf + ', no bairro ' + endereco.bairro + ', na rua "' + endereco.rua + '" com nº ' + endereco.numero + '\n');
}

console.log(CreateAdress());