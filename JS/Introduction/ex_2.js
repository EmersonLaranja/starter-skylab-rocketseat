// Create a function that gives an interval (between x and y) and displays all even numbers


function even(x, y) {

    if (x < y)
        for (var i = x; i <= y; i++)
            if (i % 2 == 0)
                console.log(i + '\n');

    if (x >= y)
        for (var i = y; i <= x; i++)
            if (i % 2 == 0)
                console.log(i + '\n');

}

even(324, 321);
