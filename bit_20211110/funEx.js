//함수예제

function square(number) {
    return number * number;
}
console.log(square(4))


var factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) };

console.log(factorial(3));


//더 짧은 함수
var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map( s => s.length );

console.log(a3); // logs [8, 6, 7, 9]