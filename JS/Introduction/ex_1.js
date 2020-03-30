var adress = {
    street: "Rua dos Pinheiros",
    number: 1293,
    burgh: "Centro",
    city: "São Paulo",
    uf: "SP"
};

function CreateAdress() {
    return ('O usuário mora em ' + adress.city + ' / ' + adress.uf + ', no bairro ' + adress.burgh + ', na rua "' + adress.street + '" com nº ' + adress.number + '\n');
}

console.log(CreateAdress());