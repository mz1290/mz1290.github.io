
// regular function expression
function square (x) {
    return x * x;
}

square (2); // returns 4

// unnamed function expression
var square = function (x) {
    return x * x;
}

square (2); // returns 4


// named function expression
var random = function square (x) {
    return x * x;
}

random (2); // returns 4
