// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:


function pares(x, y) {

    if (x < y)
        for (var i = x; i <= y; i++)
            if (i % 2 == 0)
                console.log(i + '\n');

    if (x >= y)
        for (var i = y; i <= x; i++)
            if (i % 2 == 0)
                console.log(i + '\n');

}

pares(324, 321);
