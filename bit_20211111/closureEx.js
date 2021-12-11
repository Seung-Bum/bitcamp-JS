//클로저 예문

// 블로그 예문
// var base = 'Hello, ';
// function sayHelloTo(name) {
//     var text = base + name;
//     return function() {
//         console.log(text);
//     };
// }
//
// var hello1 = sayHelloTo('승민');
// var hello2 = sayHelloTo('현섭');
// var hello3 = sayHelloTo('유근');
// hello1(); // 'Hello, 승민'
// hello2(); // 'Hello, 현섭'
// hello3(); // 'Hello, 유근'


//수업시간 돼지저금통 예문
function save() {

    let savings = 0

    return function add(money) {
        savings += money
        console.log(savings)
    }

}

const s1 = save()
s1(5000)
s1(1000)
s1(2000)

console.log('-------------------------------------')

const s2 = save()
s2(3000)
s2(3000)
s2(3000)