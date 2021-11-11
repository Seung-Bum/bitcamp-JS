//클로저 예문

var base = 'Hello, ';
function sayHelloTo(name) {
    var text = base + name;
    return function() {
        console.log(text);
    };
}

var hello1 = sayHelloTo('승민');
var hello2 = sayHelloTo('현섭');
var hello3 = sayHelloTo('유근');
hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'